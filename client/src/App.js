import React, { useState, useEffect , useContext} from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { useEffect, useContext, useState } from 'react';
import { LoginContext } from './components/ContextProvider/Context';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import PasswordReset from './components/PasswordReset';
import ForgotPassword from './components/ForgotPassword';
import Form from './components/Form';
import Resume from './components/Resume';

function App() {
  const [data, setData] = useState(false);
  const { logindata, setLoginData } = useContext(LoginContext);
  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem('usersdatatoken');

    const res = await fetch('/validuser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });

    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log('user not valid');
    } else {
      console.log('user verify');
      setLoginData(data);
      history('/dash');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      DashboardValid();
      setData(true);
    }, 2000);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    about: '',
    education: '',
    experience: '',
    projects: '',
    skills: '',
    awards: '',
    interests: '',
  });

  const [showResume, setShowResume] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8010/api/resume', formData);
      console.log('Resume created:', response.data);
      setShowResume(true);
    } catch (error) {
      console.error('Error creating resume:', error);
      // Handle error states or messages if needed
    }
  };

  return (
    <>
      {data ? (
        <>
          <Header />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dash" element={<Dashboard />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
            <Route
              path="/resume-form"
              element={
                !showResume ? (
                  <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
                ) : (
                  <Resume data={formData} />
                )
              }
            />
            <Route path="/resume" element={<Resume data={formData} />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

export default App;





// import Header from "./components/Header";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Dashboard from "./components/Dashboard";
// import Error from "./components/Error";
// import PasswordReset from "./components/PasswordReset";
// import ForgotPassword from "./components/ForgotPassword";
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
// import { Routes, Route, useNavigate } from "react-router-dom"
// import { useEffect, useContext, useState } from "react";
// import { LoginContext } from "./components/ContextProvider/Context";


// function App() {

//   const [data, setData] = useState(false);

//   const { logindata, setLoginData } = useContext(LoginContext);


//   const history = useNavigate();

//   const DashboardValid = async () => {
//     let token = localStorage.getItem("usersdatatoken");

//     const res = await fetch("/validuser", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": token
//       }
//     });

//     const data = await res.json();

//     if (data.status == 401 || !data) {
//       console.log("user not valid");
//     } else {
//       console.log("user verify");
//       setLoginData(data)
//       history("/dash");
//     }
//   }

//   useEffect(() => {
//     setTimeout(()=>{
//       DashboardValid();
//       setData(true)
//     },2000)

//   }, [])

//   return (
//     <>
//       {
//         data ? (
//           <>
//             <Header />

//             <Routes>
//               <Route path="/" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/dash" element={<Dashboard />} />
//               <Route path="/password-reset" element={<PasswordReset />} />
//               <Route path="/forgotpassword/:id/:token" element={<ForgotPassword />} />
//               <Route path="*" element={<Error />} />
//             </Routes>
//           </>

//         ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
//           Loading... &nbsp;
//           <CircularProgress />
//         </Box>
//       }


//     </>
//   );
// }

// export default App;