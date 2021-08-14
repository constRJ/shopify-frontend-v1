import axios from "axios";


const handleErrors = (response) => ({
  data: response.data,
  status: response.status,
  error: true
});
const handleSuccess = (response) => ({
  data: response.data,
  status: response.status,
  success: true
});


const publicHeaders = () => ({
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "X-Requested-With",
  Accept: "application/json",
  "Content-Type": "application/json"
});

const api = (token) => {
  const request = axios.create({
    responseType: "json",
    headers: publicHeaders()
  })
  return request
}

const request = {
  get: (url, data, token) =>
    api()
      .get(url)
      .then(handleSuccess)
      .catch(handleErrors),
  post: (url, data) =>
    api()
      .post(url, data)
      .then(handleSuccess)
      .catch(handleErrors),
  post: (url, data) =>
    api()
      .put(url, data)
      .then(handleSuccess)
      .catch(handleErrors),
  delete: (url) =>
    api()
      .delete(url)
      .then(handleSuccess)
      .catch(handleErrors),
}

export default request