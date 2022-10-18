import React from "react";
import { registerUser } from "../api-adapter";
const Register = (props) => {
    function handleSubmit(event) {
        event.preventDefault()
        console.log(event)
        const username = event.target[0].value
        const password = event.target[1].value
        console.log(username, password)
    }
  return (
    <div className="box">
      {`This is your Register Component`}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" >Username: </label>
        <input id="username" type="text" required />
        <label htmlFor="password" >Password: </label>
        <input id="password" type='password' />
        <button type="submit">Submit</button> 
      </form>
    </div>
  );
};

export default Register;
