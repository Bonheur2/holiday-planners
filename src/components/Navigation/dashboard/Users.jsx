import React, { useState } from "react";
import "./Users.css";
import Modal from "react-modal";
import {GiCancel}from  "react-icons/gi"

import EditUserForm from "./EditUserForm";
import { useEffect } from "react";
import axios from "axios";

Modal.setAppElement("#root");

function Users() {
  const initialUserData = [
    {
      id: 1,
      name: "Bonheur",
      email: "bonheurrwanda@gmail.com",
      password: "urwagasabo",
      country: "Rwanda",
    },
    {
      id: 2,
      name: "Jonathan",
      email: "jonathan@gmail.com",
      password: "janath123",
      country: "USA",
    },
  ];

  const [userData, setUserData] = useState(initialUserData);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState();
  const[myusers,setMyusers]=useState([])

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id) => {
    const updatedUserData = userData.filter((user) => user.id !== id);
    setUserData(updatedUserData);


  };
  const [addUser, setaddUser] = useState(false)

  function NewUsers() {
    setaddUser(true);
  }
  useEffect(()=>{
    const fetchuser = async ()=>{
     const res =  await axios.get('https://holiday-planner-4lnj.onrender.com/api/v1/auth/users')
     console.log(res.data)
     setMyusers(res.data)
    }
    fetchuser()
  }
  ,[])
  return (
    <>
      {addUser &&

(          <div className="register-container1">
            <div className="register-form1">
              <nav><GiCancel onClick={NewUsers} className="cancel-btn"/></nav>
              <form action="" className="reg-form1">
                <label htmlFor="">Fullname</label>
                <input type="text" placeholder="Enter your fullname" />

                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter your Email" />

                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your password" />

                <label htmlFor="">Country</label>
                <input type="text" placeholder="Enter your country" />

                <input type="submit" value="Add User" />
              </form>
              <div>
            </div>
          </div>
          </div>
          )
        }
          <div className="user-container">
          <nav className="add-user-btn" onClick={NewUsers}>Add User</nav>
            <table className="user-table">
              <thead>
                <tr>
                  <th>FULLNAME</th>
                  <th>EMAIL</th>
                  <th>COUNTRY</th>
                  <th>OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                {myusers.map((user) => (
                  <tr key={user._id}>
                    <td>{user.fullName}</td>
                    <td>{user.email}</td>
                    <td>{user.location}</td>
                    <td>
                      <button className="edit" onClick={() => handleEdit(user)}>Edit</button>
                      <button className="delete" onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <EditUserForm
            isOpen={isEditModalOpen}
            onRequestClose={() => setIsEditModalOpen(false)}
            user={selectedUser}
            onSaveEdit={(updatedUser) => {
              console.log("Updated User Data:", updatedUser);
              setIsEditModalOpen(false);
            }}
          />
        </>
        );
}

      export default Users;
