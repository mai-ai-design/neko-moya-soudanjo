(() => {
  const MAX_INPUT_BYTES = 20 * 1024 * 1024;
  const MAX_OUTPUT_BYTES = 10 * 1024 * 1024;
  const MAX_DIMENSION = 1600;
  const SUPPORTED_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

  function createError(code) {
    const error = new Error(code);
    error.code = code;
    return error;
  }

  async function decodeWithImage(file) {
    const objectUrl = URL.createObjectURL(file);
    try {
      const image = new Image();
      image.src = objectUrl;
      await image.decode();
      return image;
    } catch (error) {
      throw createError("decode_failed");
    } finally {
      URL.revokeObjectURL(objectUrl);
    }
  }

  async function decodeImage(file) {
    if (typeof createImageBitmap === "function") {
      try {
        return await createImageBitmap(file, { imageOrientation: "from-image" });
      } catch (error) {
        // Fall through to the image-element decoder.
      }
    }
    return decodeWithImage(file);
  }

  function canvasBlob(canvas, mimeType, quality) {
    return new Promise((resolve) => canvas.toBlob(resolve, mimeType, quality));
  }

  async function prepareProfilePhoto(file) {
    if (!file || !SUPPORTED_TYPES.has(file.type)) throw createError("unsupported_type");
    if (file.size > MAX_INPUT_BYTES) throw createError("too_large_input");

    let source;
    let canvas;
    try {
      try {
        source = await decodeImage(file);
      } catch (error) {
        throw createError("decode_failed");
      }
      const sourceWidth = source.width;
      const sourceHeight = source.height;
      if (!sourceWidth || !sourceHeight) throw createError("decode_failed");
      const scale = Math.min(1, MAX_DIMENSION / Math.max(sourceWidth, sourceHeight));
      const width = Math.round(sourceWidth * scale);
      const height = Math.round(sourceHeight * scale);
      canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      if (!context) throw createError("encode_failed");
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(source, 0, 0, width, height);

      let transparent = false;
      if (file.type === "image/png" || file.type === "image/webp") {
        const pixels = context.getImageData(0, 0, width, height).data;
        for (let index = 3; index < pixels.length; index += 4) {
          if (pixels[index] < 255) {
            transparent = true;
            break;
          }
        }
      }

      const mimeType = transparent ? "image/png" : "image/jpeg";
      const blob = await canvasBlob(canvas, mimeType, transparent ? undefined : 0.85);
      if (!blob || blob.type !== mimeType) throw createError("encode_failed");
      if (blob.size > MAX_OUTPUT_BYTES) throw createError("too_large_output");
      return { blob, mimeType, width, height };
    } catch (error) {
      if (error?.code) throw error;
      throw createError("encode_failed");
    } finally {
      if (source && typeof source.close === "function") source.close();
      if (canvas) {
        canvas.width = 0;
        canvas.height = 0;
      }
    }
  }

  window.CatPhotoPrepare = Object.freeze({ prepareProfilePhoto });
})();
