import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 10000
});

export const request = (endpoint, method, data) => {
  return axiosInstance({
    method: method,
    url: endpoint,
    data: data
  })
    .then(response => {
      return Promise.resolve(response);
    })
    .catch(error => {
      return Promise.reject(error);
    });
};
