import axios from "axios";

const BASE_URL = "https://crud-users-wfno.onrender.com/";
export const putUser = async (id, user) => {
  const res = await axios.put(`${BASE_URL}users/${id}/`, user);
  const data = await res.data;
  return data;
};
