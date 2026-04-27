import LoginForm from "./LoginForm";

const LogInPage = () => {
  return (
    <section className="login-page">
      <div className="login-pageHero">
        <span className="login-pageBadge">Välkommen tillbaka</span>
        <h2 className="loginformHeader">Logga in eller skapa ett konto</h2>
        <p className="login-pageIntro">
          Håll koll på ditt djurs hälsa med ett konto i VetPrep.
        </p>
      </div>
      <LoginForm />
    </section>
  );
};

export default LogInPage;
