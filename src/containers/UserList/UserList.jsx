import React, { useState } from "react";
import UserCard from "../../components/UserCard/UserCard";
import UserForm from "../../components/UserForm/UserForm";

const UserList = ({ users, deleteData, isActive, setisActive,postData }) => {
  return (
    <div className="flex flex-wrap justify-center m-16">
      <UserForm isActive={isActive} setisActive={setisActive} postData={postData}></UserForm>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteSelf={deleteData}
          isActive={isActive}
          setisActive={setisActive}
        ></UserCard>
      ))}
    </div>
  );
};

export default UserList;
