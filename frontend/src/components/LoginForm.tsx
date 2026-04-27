import "../css/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true); // true = login, false = register
  const [email, setEmail] = useState(""); //hårdkoda email + lösen för inlogging
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSumbit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const hardcodedUser = {
      email: "test@mail.com",
      password: "1234",
      name: "Test",
      pet: "Kevin",
    };

    if (email === hardcodedUser.email && password === hardcodedUser.password) {
      sessionStorage.setItem("user", JSON.stringify(hardcodedUser));
      navigate("/LoggedInUser", { state: hardcodedUser });
    } else {
      alert("fel mejl eller lösenord");
    }
  };
  return (
    <section className="loginForm-card">
      <div className="loginContent">
        <div
          className="button-group"
          role="tablist"
          aria-label="Inloggning eller registrering"
        >
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
            type="button"
            role="tab"
            aria-selected={isLogin}
          >
            Logga in
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
            type="button"
            role="tab"
            aria-selected={!isLogin}
          >
            Registrera
          </button>
          <div className={`slider ${isLogin ? "" : "slide-right"}`}></div>
        </div>

        {isLogin ? (
          <form className="form" onSubmit={handleSumbit}>
            <input
              type="email"
              placeholder="Mejl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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

        <p className="form-footnote">
          Genom att fortsätta godkänner du våra användarvillkor.
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
