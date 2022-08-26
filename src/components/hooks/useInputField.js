import { useState } from "react";

/* Hook para manejar el state onChange de los inputs*/
export function useField({type}) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  } 

  return {
    type,
    value,
    onChange
  }
}

/* const sendValues = {
  name: name.value,
  lastName: lastName.value,
  email: email.value,
  password: password.value,
  confirmPassword: confirmPassword.value,
}; */

