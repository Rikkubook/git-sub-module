import axios from "axios";

const postAxios = async (apiRouter: string, parma: unknown) => {
  const API = import.meta.env.VITE_API;
  return new Promise((resolve, reject) => {
    axios
      .post(`${API}${apiRouter}`, parma)
      .then((response) => {
        console.log(response);
        resolve(response);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          console.error("Error:", error.response?.data.message);
          reject(error.response?.data.message);
        } else {
          reject(error.message);
        }
      });
  });
};

export { postAxios };
