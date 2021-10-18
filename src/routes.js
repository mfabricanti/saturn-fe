import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Login} />
        </BrowserRouter>
    )
}

export default Routes;