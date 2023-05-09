import axios from "axios";

const BASE_URL = "https://crud-users-wfno.onrender.com/";
export const getUsers = async () => {
  const res = await axios.get(`${BASE_URL}users/`);
  const data = await res.data;
  return data;
};
