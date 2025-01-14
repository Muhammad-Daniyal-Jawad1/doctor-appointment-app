import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
        {/* Left Side */}
        <div>
            <p>Book Appointments <br /> with Trusted Doctors</p>
            <div>
                <img src={assets.group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted doctors, <br /> schedule your appointment hassle-free.</p>
            </div>
        </div>

        {/* Right Side */}
        <div>

        </div>
    </div>
  )
}

export default Header