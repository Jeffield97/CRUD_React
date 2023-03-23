import { useState, useEffect } from "react";
import "./App.css";
import UserCard from "./components/UserCard/UserCard";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./containers/UserList/UserList";
import { deleteUser } from "./utils/DeleteUser";
import { getUser } from "./utils/GetUser";
import { getUsers } from "./utils/GetUsers";
import { postUser } from "./utils/PostUser";
import { putUser } from "./utils/PutUser";

function App() {
  //! Reactive Variables
  const [users, setUsers] = useState([]);
  const [isActive, setisActive] = useState("invisible");

  const handleCreate = () => {
    setisActive("visible");
  };
  const user = {
    email: "user@example.com",
    password: "string",
    first_name: "string",
    last_name: "string",
    birthday: "2023-03-23",
  };
  const user2 = {
    email: "user2@example.com",
    password: "string",
    first_name: "string",
    last_name: "string",
    birthday: "2023-03-23",
  };

  //? HTTP METHODS

  //! GET all users from API
  const getAllData = async () => {
    const res = await getUsers();
    setUsers(res);
    console.log(res);
  };

  //! GET a user from API
  const getData = async (id) => {
    const res = await getUser(id);
    console.log(res);
  };

  //! POST a user to API
  const postData = async (user) => {
    const res = await postUser(user);
    getAllData();
    console.log(res);
  };

  //! PUT, update a user to API
  const putData = async (id, user) => {
    const res = await putUser(id, user);
    getAllData();
    console.log(res);
  };

  //! DELETE, delete a user from API
  const deleteData = async (id) => {
    const res = await deleteUser(id);
    getAllData();
    console.log(res);
  };
  //! This function is executed once
  useEffect(() => {
    getAllData();
    // getData(9516);
    // postData(user2);
    // putData(9519, user);
    // deleteData(9518)
  }, []);
  return (
    <div className="App relative">
      <button
        onClick={handleCreate}
        className="btn btn-outline sticky top-5 m-3 btn-sm"
      >
        Create a new User
      </button>
      <div className="text-center">
        <h1 className="text-3xl font-bold">USER LIST</h1>
      </div>

      <UserList
        users={users}
        deleteData={deleteData}
        isActive={isActive}
        setisActive={setisActive}
        postData={postData}
      ></UserList>
    </div>
  );
}

export default App;
