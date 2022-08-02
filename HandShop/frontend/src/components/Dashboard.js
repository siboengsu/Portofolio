import React, {useState, useEffect} from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const history = useNavigate();

  useEffect(()=>{
    refreshToken();
  }, []);

  const refreshToken = async() => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decode = jwt_decode(response.data.accessToken);
      setName(decode.name);
      setExpire(decode.exp);
    } catch (error) {
      if(error.response){
        history("/")
      }
    }
  }

  // untuk menjalankan axios interceptors
  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async(config) => {
    const currentDate = new Date();
    if(expire * 1000 < currentDate){
      const response = await axios.get('http://localhost:5000/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decode = jwt_decode(response.data.accessToken);
      setName(decode.name);
      setExpire(decode.exp);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  const getUsers = async() => {
    const response = await axiosJWT.get('http://localhost:5000/users',{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
  } 

  return (
    <div className='container mt-5'>
        <h1 className="">Welcome Back : {name}</h1>
        <button onClick={getUsers} className="button is-info">Get users</button>
    </div>
  )
}

export default Dashboard