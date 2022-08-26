import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Login.module.css";
import logo from "../../../assets/logo.svg";
import LoginForm from '../../containers/LoginForm/LoginForm';


const Login = () => {
 

  return (
    <section className={styles.MainContainer}>
      <img className={styles.Logo} src={logo} alt="logo img" />
      <LoginForm/>
      <section className={styles.Footer}>
        <p className={styles.SignUp}>Don't have an account? <Link to="/register">Sign Up</Link></p>
      </section>
    </section>
  )
}

export default Login;