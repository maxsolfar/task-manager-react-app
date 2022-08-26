import React from "react";
import styles from "./LoginForm.module.css";
import { useField } from '../../hooks/useInputField';
import InputField from '../../sections/InputField/InputField';
import Button from '../../sections/Button/Button';


const LoginForm = () => {
  
  const email = useField({type: "email"});
  const password = useField({type: "password"});

  return (
    <section className={styles.FormContainer}>
        <h1 className={styles.Title}>Login</h1>
        <InputField
          {...email}
          theme={"dark"}
          icon={"email"}
          label={"Email"}
          name={"email"}
          placeholder={"Type your email"}
        />
        <InputField
          {...password}
          theme={"dark"}
          icon={"password"}
          label={"Password"}
          name={"password"}
          placeholder={"Type your password"}
        />
        <Button title={"Login"} type={"secondary"} size={"md"} width={"Full"} />
    </section>
 
  )
};

export default LoginForm;
