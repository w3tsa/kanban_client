import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const usernameRef = useRef(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("userID", usernameRef.current.value);
    usernameRef.current.value = "";
    navigate("/task");
  }

  return (
    <div className="login__container">
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="username">Provide a username</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          ref={usernameRef}
        />
        <button>SIGN IN</button>
      </form>
    </div>
  );
};

export default Login;
