import React from "react";
import styles from "./Register.module.css";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import RegisterForm from "../../containers/RegisterForm/RegisterForm";

const Register = () => {

  return(
    <section className={styles.MainContainer}>
      <img className={styles.Logo} src={logo} alt="logo img" />
      <RegisterForm/>
      <section className={styles.Footer}>
        <p className={styles.Login}>Already have account? <Link to="/login">Login</Link></p>
      </section> 
    </section>  
  )
};

export default Register;
