import "../css/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Terms from "./Terms";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [showTerms, setShowTerms] = useState(false);
  const [userName, setUserName] = useState("");
  const [petName, setPetName] = useState("");

  const navigate = useNavigate();

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();

    const endpoint = isLogin ? "login" : "register";

    const body = isLogin ? {email, password} :
    { userName, petName, email, password}

    try {
      const res = await fetch(`http://localhost:5229/api/users/${endpoint}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errorText = await res.text();
        alert(errorText);
        return;
      }

      const user = await res.json();

      sessionStorage.setItem("user", JSON.stringify(user));
      navigate("/LoggedInUser", {state: user});
    } catch (err) {
      alert("Något gick fel mer servern");
      console.error(err)
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
          <form className="form" onSubmit={handleSumbit}>
            <input type="text" placeholder="Ditt namn" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type="text" placeholder="Namn på husdjur" value={petName} onChange={(e) => setPetName(e.target.value)} />
            <input type="email" placeholder="Mejl" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Lösenord" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Registrera</button>
          </form>
        )}

        <p className="form-footnote">
          Genom att fortsätta godkänner du våra {""}
          <span className="termsText" onClick={() => setShowTerms(true)}>användarvillkor</span>
        </p>

        {showTerms && (
          <Terms onClose={() => setShowTerms(false)}/>
        )}
      </div>
    </section>
  );
};

export default LoginForm;
