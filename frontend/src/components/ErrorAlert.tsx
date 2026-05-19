import "../css/ErrorAlert.css";

type AlertProps = {
    message: string;
}

const ErrorAlert = ({ message } : AlertProps) => {
    if (!message) return null;

return (
    <div className="alert-box">
        <span className="alert-icon">⚠️</span>
        <p>{message}</p>
    </div>
)
};

export default ErrorAlert;