import { useRouteError } from "react-router-dom";
import './styles/Error.css';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id='error-page'>
            <h1>O_O !</h1>
            <p>Sorry, an unxpected error ocurred.</p>
            <p>
               <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}