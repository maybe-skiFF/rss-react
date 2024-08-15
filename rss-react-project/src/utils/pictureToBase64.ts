const pictureToBase64 = (picture: Blob): Promise<string> => {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = () => res(reader.result as string);
    reader.onerror = err => rej(err);
    reader.readAsDataURL(picture);
  });
};

export { pictureToBase64 };
