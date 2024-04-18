import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    //before next auth development is complete, token will be hardcoded
    //this means this only works on my machine, if you want to run the apis
    //you'll have to replace the token below with the one that's returned by BE after logging in/signing up
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ4aW55aTAyMiIsImlhdCI6MTcxMzM1MTE3NiwiZXhwIjoxNzEzNDM3NTc2fQ.sCe2OD9jeTahZOsvAsAaTqbeQ9SqYdKiqyRASm0mbiE";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    let res = error.response;
    if (res && res.status == 401) {
      // TODO: Handle unauthorised error
    }
    return Promise.reject(error);
  }
);

export default axiosClient;

//for external apis

export const axiosExternalClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
