import axios from "axios";
import React, { useState,useEffect } from "react";
import{useNavigate,useParams} from "react-router-dom"

const Edit = () => {
  let navigate=useNavigate();
  const {id}=useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const {name,username,email,phone}=user;
  const onInputchange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  };
   const onSubmit=async (e)=>{
  e.preventDefault();
  await axios.put(`http://localhost:3001/users/${id}`,user);
  navigate("/");
}
useEffect(() => {
    loaduser();
}, [])

const loaduser=async()=>{
const result=await axios.get(`http://localhost:3001/users/${id}`);
setUser(result.data);
}
  return (
  <div className="adduser col-6 m-5 card p-5 bg-primary text-white">
    <form onSubmit={e=>onSubmit(e)}>
        <center><h1>Edituser</h1></center>
        <div>
          <label>Name</label>
          <br />
          <input
            className="input-Name"
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={e=>onInputchange(e)}
          />
        </div>
        <br />
        <div>
          <label className="">Username</label>
          <br />
          <input
            className="input-Name"
            type="text"
            placeholder="Enter name"
            name="username"
            value={username}
            onChange={e=>onInputchange(e)}
          />
        </div>
        <br />
        <div>
          <label>Email</label>
          <br />
          <input 
          className="input-email" 
          type="email" 
          placeholder="Email"
          name="email"
          value={email}
          onChange={e=>onInputchange(e)} 
          />
        </div>
        <br />
        <div>
          <label>phone</label>
          <br />
          <input 
          className="input-email" 
          type="text" 
          placeholder="Address" 
          name="phone"
          value={phone}
          onChange={e=>onInputchange(e)}
          />
        </div>
        <br></br>
        <button className="btn btn-warning">Update</button>
      </form>
    </div>
    
  );
};

export default Edit;
