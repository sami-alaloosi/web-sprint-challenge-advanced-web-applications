import React, {useState} from "react";
import axios from "axios"
import {useHistory} from "react-router-dom"


const formInitalValue = {
  username: "", 
  password: ""
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

const [formValue, setFormValue] = useState(formInitalValue)

const update = (event) => {
  const {name, value} = event.target

  setFormValue({
    ...formValue,
    [name]: value
  })
}

const {push} = useHistory()

const submit = (event) => {
  event.preventDefault();
  axios
    .post("http://localhost:5000/api/login", formValue)
    .then((res) => {
      // console.log("API RESPONSE:", res);
      localStorage.setItem("token", res.data.payload);
      push("/bubble");
    })
    .catch((err) => console.log("API ERROR:", { err }));
};
  return (
    <>
     <form onSubmit={submit} >
       <label htmlFor="username">
         <input
          type="text"
          name="username"
          id="username"
          placeholder=" Username"
          value={formValue.username}
          onChange={update}
          />
       </label>
       <label htmlFor="password">
         <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          value={formValue.password}
          onChange={update}
          />
       </label>
       <button type="submit">Submit !</button>
     </form>
    </>
  );
};

export default Login;
