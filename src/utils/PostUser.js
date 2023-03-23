import axios from "axios";

const BASE_URL = "https://users-crud.academlo.tech/";
export const postUser = async (user) => {
  console.log(user);
  const res = await axios.post(`${BASE_URL}users/`, user);
  const data = await res.data;
  return data;
};
