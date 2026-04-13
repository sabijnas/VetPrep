import { useLocation } from "react-router-dom"

const LoggedInUser = () => {
    const location = useLocation();
    const user = location.state; //för att kunna hämta data från loginformuläret

    return (
        <div>
            <h1>Välkommen {user?.name}</h1>
            <p>Statuslogg för {user?.pet}</p>
        </div>
    )
}

export default LoggedInUser