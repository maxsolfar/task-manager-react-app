import React,{ useState } from 'react';
import styles from "./RegisterForm.module.css";
import InputField from '../../sections/InputField/InputField';
import Button from '../../sections/Button/Button';
import { useDispatch } from "react-redux";
import { signUp } from "../../../redux/actions/actions";

const RegisterForm = () => {

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }; 

  const [inputs, setInputs] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUp(inputs));
    setInputs(initialValues);
  };
  
  return (
    <section className={styles.FormContainer}>
    <h1 className={styles.Title}>Sign Up</h1>
    <InputField
      theme={"dark"}
      icon={"user"}
      label={"Name"}
      name={"name"}
      value={inputs.name}
      onChange={(e) => handleChange(e)}
      placeholder={"Type your name"}
    />
    <InputField
      theme={"dark"}
      icon={"user"}
      value={inputs.lastName}
      onChange={(e) => handleChange(e)}
      label={"Last Name"}
      name={"lastName"}
      placeholder={"Type your last name"}
    />
    <InputField
      theme={"dark"}
      icon={"email"}
      value={inputs.email}
      onChange={(e) => handleChange(e)}
      label={"Email"}
      name={"email"}
      placeholder={"Type your email"}
    />
    <InputField
      theme={"dark"}
      icon={"password"}
      value={inputs.password}
      onChange={(e) => handleChange(e)}
      label={"Password"}
      name={"password"}
      placeholder={"Type your password"}
    />
    <InputField
      theme={"dark"}
      icon={"password"}
      value={inputs.confirmPassword}
      onChange={(e) => handleChange(e)}
      label={"Confirm Password"}
      name={"confirmPassword"}
      placeholder={"Confirm your password"}
    />
    <Button title={"Sign Up"} type={"secondary"} size={"md"} width={"Full"} onClick={(e)=>handleSubmit(e)}  />
  </section>
  )
}

export default RegisterForm;