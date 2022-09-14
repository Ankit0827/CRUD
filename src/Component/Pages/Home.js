 import axios from "axios";
 import React from "react";
 import Table from 'react-bootstrap/Table';
 import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Home = () => {
  const [user, setUser] = useState([]);
useEffect(() => {
      loadUser();
     }, []);
     const loadUser = async () => {
       const result = await axios.get("http://localhost:3001/users");
      setUser(result.data.reverse());
  };
  const deleteuser=async id=>{
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  }
  return (
    <div className="table">
       <Table striped  hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {user.map((user , index)=>(
      <tr>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
         <td>
          <Link className="btn btn-outline-primary  m-1" to={`/user/Edit/${user.id}`}>Edit</Link>
          <button className="btn btn-outline-danger" onClick={()=>deleteuser(user.id)}>Delete</button>
         </td>
      </tr>
      )
    )}
    </tbody>
    </Table>
    </div>
  )
}

export default Home




