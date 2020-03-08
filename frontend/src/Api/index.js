import Axios from "axios";
import { UNAUTHORIZED, NOTFOUND } from "./status";
const DOMAIN = "http://localhost:8000";
const req = (method, url, data) => {
  return Axios({
    method,
    url: DOMAIN + url,
    data
  })
    .then(result => result.data)
    .catch(({ response }) => {
      if (response.status === UNAUTHORIZED) console.log("UNAUTHORIZED");
      if (response.status === NOTFOUND) console.log("NOTFOUND");
      throw response;
    });
};
export const setAuthInHeader = token => {
  Axios.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : null;
};
export const friends = {
  create(title) {
    return req("post", "/friends", { title });
  },
  fetch() {
    return id ? req("get", `/friends/${id}`) : req("get", "/friends");
  },
  update(id, favorite) {
    return req("delete", `/friends/${id}`, { favorite });
  },
  destroy(id) {
    return req("delete", `/friends/${id}`);
  }
};
