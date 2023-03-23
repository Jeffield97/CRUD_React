import axios from "axios";

const BASE_URL = "https://users-crud.academlo.tech/";
export const deleteUser = async (id) => {
  console.log(`Delete user: ${id}`);
  const res = await axios.delete(`${BASE_URL}users/${id}/`);
  const data = await res.data;
  return data;
};
