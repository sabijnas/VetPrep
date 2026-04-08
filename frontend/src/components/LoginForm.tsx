import "../css/Login.css";
import { useState } from "react";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true); // true = login, false = register

  return (
    <div className="loginForm-card">
      <div className="loginContent">
        <div className="button-group">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Logga in
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Registrera
          </button>
          <div className={`slider ${isLogin ? "" : "slide-right"}`}></div>
        </div>

        {isLogin ? (
          <form className="form">
            <input type="email" placeholder="Mejl" />
            <input type="password" placeholder="Lösenord" />
            <button type="submit">Logga in</button>
          </form>
        ) : (
          <form className="form">
            <input type="text" placeholder="Ditt namn" />
            <input type="text" placeholder="Namn på husdjur" />
            <input type="email" placeholder="Mejl" />
            <input type="password" placeholder="Lösenord" />
            <button type="submit">Registrera</button>
          </form>
        )}
      </div>{" "}
      <div className="cat-container">
        <img src="src/assets/cat.png" className="cat" />
      </div>
    </div>
  );
};

export default LoginForm;
