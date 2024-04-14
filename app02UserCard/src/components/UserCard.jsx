import React from 'react'
import '../styles/UserCard.css'


function UserCard({ user }) {
  const { name, age, phone, address } = user; 
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <div className="age">Age : {age}</div>
      <div className="phone">Phone : {phone}</div>
      <div className="address">Address : {address}</div>
    </div>
  );
}

export default UserCard