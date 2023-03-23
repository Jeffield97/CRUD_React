import axios from "axios";

const BASE_URL = "https://users-crud.academlo.tech/";
export const getUser = async (id) => {
    // console.log("Get id")
  const res = await axios.get(`${BASE_URL}users/${id}/`);
  const data = await res.data;
  return data;
};
