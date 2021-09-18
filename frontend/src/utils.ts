export const isSupportedMedia = (file: string): boolean => {
  const allowedFormats = ['image/png', 'image/jpg', 'image/jpeg'];

  console.log(file);

  console.log(allowedFormats.includes(file.toLowerCase()));

  return allowedFormats.includes(file.toLowerCase());
};
