const pictureToBase64 = (picture: File): Promise<string> => {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(picture);
    reader.onload = () => res(reader.result as string);
    reader.onerror = err => rej(err);
  });
};

export { pictureToBase64 };
