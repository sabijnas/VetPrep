import React from "react";
import "../../css/NavViews.css"
import ErrorAlert from "./ErrorAlert";

type Props = { children?: React.ReactNode; };

type State = { hasError: boolean; };

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(): Partial<State> {
        return { hasError: true };
    }

    render() {
        return this.state.hasError ? (
            <div className="readmore-wrapper">
                <div className="readmore-card">
                <h2 className="errorHeader">Något gick fel</h2>
                <ErrorAlert message="Ett oväntat fel uppstod, försök ladda om sidan eller gå tillbaka till startsidan"/>
                <a className="home-link home-linkSecondary" href="/">Gå till startsidan</a>
                <button className="loadBtn" onClick={() => window.location.reload()}>Ladda om</button>
                </div>
            </div>
        ) : (
            this.props.children
        );
    }
}

export default ErrorBoundary;