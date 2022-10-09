export const readFile = async (
  file: File
): Promise<string | ArrayBuffer | null> => {
  const fr = new FileReader();
  return new Promise((resolve, reject) => {
    fr.onload = () => {
      resolve(fr.result);
      // onSuccess(fr.result as string);
    };
    fr.onerror = () => {
      console.log("File read failure");
      reject(null);
    };
    fr.readAsText(file);
  });
};
