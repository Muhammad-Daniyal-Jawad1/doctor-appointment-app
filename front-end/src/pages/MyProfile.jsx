import React, { useState } from 'react'
import {assets} from '../assets/assets'


const MyProfile = () => {

  const [userData,setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1 123 456 8322',
    address:{
      line1:"57th Richmond Cross, Cambridge",
      line2:"Circle, Montenegro Road, Manchester"
    },
    gender: 'male',
    dob:'2000-01-20'
  })

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>

      <img src={userData.image} alt="" />
      {
        isEdit
        ? <input type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev, name: e.target.value}))} />
        :<p>{userData.name}</p>
      }

      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {
            isEdit
            ? <input type="text" value={userData.phone} onChange={e => setUserData(prev => ({...prev, phone: e.target.value}))} />
            :<p>{userData.phone}</p>
          }
          <p>Address:</p>
          {
            isEdit
            ? <p>
              <input onChange={(e) => setUserData(prev => ({...prev.address, line1: e.target.value}))} value ={userData.address.line1} type="text" />
              <br />
              <input onChange={(e) => setUserData(prev => ({...prev.address, line2: e.target.value}))} value ={userData.address.line2} type="text" />
            </p>
            : <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          }
          
        </div>
      </div>

      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender:</p>
          {
            isEdit
            ? <select>
              <option value="Male">Male</option>
              <option value="Female">Female </option>
            </select>
            :<p>{userData.name}</p>
          }
        </div>
      </div>
        
    </div>
  )
}

export default MyProfile