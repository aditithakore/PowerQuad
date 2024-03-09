import { useRouteError } from "react-router-dom";

const DisplayError = ()=>{
    const err = useRouteError();

    return (
        <div className="container text-center">
        <h1>{err?.status}</h1>
        <h1>Route {err?.statusText}</h1>
        <h1>PoweQuad is working on it</h1>
        <div className="spinner-border" role="status"></div>
    </div>
    );
}

export default DisplayError;