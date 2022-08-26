import React from "react";
import styles from "./Landing.module.css";
import { useNavigate } from "react-router-dom";

import vectorInitial from "../../../assets/Landing/vector-initial.svg";
import logo from "../../../assets/logo.svg";
import Button from "../../sections/Button/Button";

const Landing = () => {
  const navigate = useNavigate();

  const redirect = (where)=>{
    navigate(`/${where}`);
  }

  return (
    <section className={styles.MainContainer}>
      <img className={styles.Logo} src={logo} alt="logo img" />
      <section className={styles.BannerContainer}>
        <img className={styles.imgLanding} src={vectorInitial} alt="img-landing"/>
        <h2 className={styles.Title}>Forward to the Goal</h2>
        <p className={styles.Text}>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.</p>
      </section>
      <section className={styles.ButtonsContainer}>
        <Button title={"Login"} type={"dark"} size={"md"} width={"Full"} onClick={() => redirect("login")} />
        <Button title={"Sign Up"} type={"secondary"} size={"md"} width={"Full"} onClick={() => redirect("register")} />
      </section>
    </section>
  )
};

export default Landing;
