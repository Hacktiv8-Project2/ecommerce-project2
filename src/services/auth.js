import axios from "axios";

const baseURL = "https://fakestoreapi.com";

export const authLogin = async ({username, password}) => {
  if (username === "johnd" && password === "m38rmF$") {
    const response = await axios.post(`${baseURL}/auth/login`, {
      username, 
      password
    });

    return response.data.token;
  }

  if (username === "admin@bukapedia.com" && password === "admin123") {
    return username;
  }

  return Promise.reject("Invalid username and password");
}