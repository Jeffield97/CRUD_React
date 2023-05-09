import axios from "axios";

const BASE_URL = "https://crud-users-wfno.onrender.com/";
export const postUser = async (user) => {
  console.log(user);
  const res = await axios.post(`${BASE_URL}users/`, user);
  const data = await res.data;
  return data;
};
