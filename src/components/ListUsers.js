//import '../styles/ListUser.css';
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import { Link, BrowserRouter, Routes, Route, Redirect, Navigate } from 'react-router-dom'
import App from './App'
const axios = require('axios')

var config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
}

function RegisterAuthUser() {
    axios.get('http://localhost:8686/api/user', config)
    .then(function (response) {
      console.log(response['data'])
    }).catch(function (error) {
      window.alert(error) 
    });

    return (
        <h1>hello world</h1>
    )
}

export default RegisterAuthUser;