import React from "react";

const UserCard = ({ user, deleteSelf }) => {
  const handleDelete = (e) => {
    const id = e.target.parentElement.parentElement.id;
    deleteSelf(id);
  };
  return (
    <div
      className="border border-slate-600 p-2 bg-slate-800 m-5 rounded-xl w-3/12"
      id={user.id}
    >
      <div className="m-5">
        <h2>{`User: ${user.first_name} ${user.last_name}`}</h2>
        <p>{`Email: ${user.email}`}</p>
        <p>{`Birthday: ${user.birthday}`}</p>
      </div>
      <div className=" gap-5 flex justify-between">
        <button className="btn btn-sm" onClick={handleDelete}>
          Eliminar
        </button>
        <button className="btn btn-sm">Edit</button>
      </div>
    </div>
  );
};

export default UserCard;
