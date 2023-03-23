import React from "react";
import UserCard from "../../components/UserCard/UserCard";

const UserList = ({ users,deleteData }) => {
  return (
    <div className="flex flex-wrap justify-center m-16">
      {users.map((user) => (
        <UserCard key={user.id} user={user} deleteSelf={deleteData}></UserCard>
      ))}
    </div>
  );
};

export default UserList;
