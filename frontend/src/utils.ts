export const isSupportedMedia = (file: string): boolean => {
  const allowedFormats = ['image/png', 'image/jpg', 'image/jpeg'];

  return allowedFormats.includes(file.toLowerCase());
};
