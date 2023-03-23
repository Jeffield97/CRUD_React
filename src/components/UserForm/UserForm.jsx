import React, { useState } from "react";

const UserForm = ({ isActive, setisActive, postData }) => {
  const handleCancel = (e) => {
    e.preventDefault();
    setisActive("invisible");
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: document.getElementById("emailId").value,
      password: document.getElementById("passwordId").value,
      first_name: document.getElementById("firstNameId").value,
      last_name: document.getElementById("lastNameId").value,
      birthday: document.getElementById("birthdayId").value,
    };
    postData(user);
  };
  return (
    <form
      action=""
      className={`bg-slate-500 w-1/5 my-5 pb-4 border border-slate-500 rounded-xl flex flex-col items-center absolute ${isActive} `}
      onSubmit={handlerSubmit}
    >
      <h1 className="text-2xl my-1 font-bold">Update</h1>

      <div className="form-control">
        <label className="input-group input-group-sm my-2 flex justify-center">
          <span className="w-5/12">First name</span>
          <input
            id="firstNameId"
            type="text"
            placeholder="Enter your name"
            className="input input-bordered input-sm w-6/12"
          />
        </label>
        <label className="input-group input-group-sm my-2 flex justify-center">
          <span className="w-5/12">Last name</span>
          <input
            id="lastNameId"
            type="text"
            placeholder="Enter your name"
            className="input input-bordered input-sm w-6/12"
          />
        </label>
        <label className="input-group input-group-sm my-2 flex justify-center">
          <span className="w-5/12">Email</span>
          <input
            id="emailId"
            type="email"
            placeholder="Enter your name"
            className="input input-bordered input-sm w-6/12"
          />
        </label>
        <label className="input-group input-group-sm my-2 flex justify-center">
          <span className="w-5/12">Password</span>
          <input
            id="passwordId"
            type="password"
            placeholder="Enter your name"
            className="input input-bordered input-sm w-6/12"
          />
        </label>
        <label className="input-group input-group-sm my-2 flex justify-center">
          <span className="w-5/12">Birthday</span>
          <input
            id="birthdayId"
            type="date"
            placeholder="Enter your name"
            className="input input-bordered input-sm w-6/12"
          />
        </label>
      </div>
      <div className="flex justify-center gap-5 mt-5">
        <button type="button" className="btn btn-sm " onClick={handleCancel}>
          Cancelar
        </button>
        <button className="btn btn-sm btn-outline text-slate-900 font-bold">
          Crear
        </button>
      </div>
    </form>
  );
};

export default UserForm;
