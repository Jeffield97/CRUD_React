import React from "react";

const UserCard = ({ user, deleteSelf, isActive, setisActive }) => {
  const handleDelete = (e) => {
    const id = e.target.parentElement.parentElement.id;
    deleteSelf(id);
  };
  const handleEdit = () => {
    setisActive("visible");
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
        <button
          className="btn btn-sm bg-red-500 text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
        <button className="btn btn-sm btn-outline" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default UserCard;
