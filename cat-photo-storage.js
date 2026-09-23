// Phase 2.5 で検証済みの rls-test/photo-storage.js から、本番用部分のみを処理を変えずに切り出したファイルです。
// 処理を変更する場合は、Storage RLS の再検証が必要です。
(function () {
  'use strict';

  const BUCKET = 'cat-photos';
  const SIGNED_URL_TTL_SECONDS = 300;
  const MIME_EXTENSIONS = Object.freeze({
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
  });

  function extensionForMimeType(mimeType) {
    const extension = MIME_EXTENSIONS[mimeType];
    if (!extension) throw new Error('JPEG、PNG、WebPの画像だけを指定できます。');
    return extension;
  }

  function createProfilePath(userId, catId, mimeType) {
    return `${userId}/${catId}/profile-${crypto.randomUUID()}.${extensionForMimeType(mimeType)}`;
  }

  async function getCurrentUser(client) {
    const { data, error } = await client.auth.getUser();
    if (error || !data.user) throw new Error('ログイン中のユーザーを確認できませんでした。');
    return data.user;
  }

  async function getOwnedCat(client, catId, userId) {
    const { data, error } = await client
      .from('cats')
      .select('id, user_id, photo_path')
      .eq('id', catId)
      .single();
    if (error || !data || data.user_id !== userId) throw new Error('この猫の情報を確認できませんでした。');
    return data;
  }

  function assertUploadFile(file) {
    if (!file || !MIME_EXTENSIONS[file.type]) throw new Error('JPEG、PNG、WebPの画像を選んでください。');
  }

  async function saveProfilePhoto(client, { catId, file }) {
    assertUploadFile(file);
    const user = await getCurrentUser(client);
    const cat = await getOwnedCat(client, catId, user.id);
    const nextPath = createProfilePath(user.id, cat.id, file.type);
    const storage = client.storage.from(BUCKET);
    const { error: uploadError } = await storage.upload(nextPath, file, {
      contentType: file.type,
      upsert: false,
    });
    if (uploadError) throw uploadError;

    const { data: updatedCat, error: updateError } = await client
      .from('cats')
      .update({ photo_path: nextPath })
      .eq('id', cat.id)
      .select('id, photo_path')
      .single();

    if (updateError || !updatedCat || updatedCat.photo_path !== nextPath) {
      await storage.remove([nextPath]);
      throw updateError || new Error('写真のパスを保存できませんでした。');
    }

    let previousCleanupError = null;
    if (cat.photo_path) {
      const { error } = await storage.remove([cat.photo_path]);
      previousCleanupError = error || null;
    }

    return { photoPath: nextPath, previousPhotoPath: cat.photo_path, previousCleanupError };
  }

  async function removeProfilePhoto(client, { catId }) {
    const user = await getCurrentUser(client);
    const cat = await getOwnedCat(client, catId, user.id);
    if (!cat.photo_path) return { photoPath: null, storageCleanupError: null };

    const { data: updatedCat, error: updateError } = await client
      .from('cats')
      .update({ photo_path: null })
      .eq('id', cat.id)
      .eq('photo_path', cat.photo_path)
      .select('id, photo_path')
      .single();
    if (updateError || !updatedCat || updatedCat.photo_path !== null) {
      throw updateError || new Error('写真のパスを削除できませんでした。');
    }

    const { error: storageCleanupError } = await client.storage.from(BUCKET).remove([cat.photo_path]);
    return { photoPath: cat.photo_path, storageCleanupError: storageCleanupError || null };
  }

  async function getProfilePhotoSignedUrl(client, photoPath, expiresIn = SIGNED_URL_TTL_SECONDS) {
    if (!photoPath) return { signedUrl: null };
    const { data, error } = await client.storage.from(BUCKET).createSignedUrl(photoPath, expiresIn);
    if (error) throw error;
    return { signedUrl: data.signedUrl };
  }

  async function getProfilePhotoSignedUrls(client, photoPaths, expiresIn = SIGNED_URL_TTL_SECONDS) {
    const paths = photoPaths.filter(Boolean);
    if (!paths.length) return [];
    const { data, error } = await client.storage.from(BUCKET).createSignedUrls(paths, expiresIn);
    if (error) throw error;
    return data;
  }

  window.CatPhotoStorage = Object.freeze({ BUCKET, SIGNED_URL_TTL_SECONDS, createProfilePath, saveProfilePhoto, removeProfilePhoto, getProfilePhotoSignedUrl, getProfilePhotoSignedUrls });
})();
