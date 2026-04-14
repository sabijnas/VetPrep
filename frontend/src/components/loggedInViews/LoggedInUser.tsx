import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import Statuslog from "./Statuslog";
import "../../css/LoggedInUser.css"

const LoggedInUser = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state || JSON.parse(sessionStorage.getItem("user") || "null")

    useEffect(() => {
        if (!user) {
            navigate("/LogIn");
        }
    }, [user, navigate])

    return (
        <div>
            <h1 className="headerLoggedIn">Välkommen {user?.name}</h1>
            <p className="paragraphLoggedIn"> Statuslogg för {user?.pet}</p>
            <Statuslog/>
            <h3 className="healthlog-header">Hälsologg</h3>
            <p className="paragraphLoggedIn"> Följ {user?.pet}s hälsa över tid</p>
        </div>
    )
}

export default LoggedInUser