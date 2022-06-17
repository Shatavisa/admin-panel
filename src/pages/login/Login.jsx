
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/apiCalls";
import "./login.css"
const Login = () => {
  const [useremail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch,{ email: useremail, password }, navigate);
  };

  return (
    <div className="loginContainer">
    <div className="pageHeading">Shopping Easy Admin Panel</div>
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
     
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="email"
        name="email"
        placeholder="email"
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width:100 }}>
        Login
      </button>
    </div>
    </div>
  );
};

export default Login;