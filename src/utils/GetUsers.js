import axios from "axios";

const BASE_URL = "https://users-crud.academlo.tech/";
export const getUsers = async () => {
  const res = await axios.get(`${BASE_URL}users/`);
  const data = await res.data;
  return data;
};
