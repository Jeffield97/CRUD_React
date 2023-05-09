import axios from "axios";

const BASE_URL = "https://crud-users-wfno.onrender.com/";
export const getUser = async (id) => {
    // console.log("Get id")
  const res = await axios.get(`${BASE_URL}users/${id}/`);
  const data = await res.data;
  return data;
};
