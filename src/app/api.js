import axios from "axios";

const requester = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    TokenCybersoft: process.env.REACT_APP_CYBERSOFT_TOKEN,
  },
});
//interceptor de dinh tojken vao
// requester.interceptors.use(req => {
//   req.headers = {
//     ...req.headers,
//     Authorization: "Bearer " + localStorage.getItem("token"),
//   };
//   return req;
// });
export default requester;
