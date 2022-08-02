import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const history = useNavigate();
    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            history("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
    <div class="container">
       <div class="navigation">
            <ul>
                <li>
                    <a href="#">
                        <span class="icon"></span>
                        <span class="title">Hand Shop</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"></span>
                        <span class="title">Hand Shop</span>
                    </a>
                </li>
            </ul>
       </div>
    </div>
  )
}

export default Navbar