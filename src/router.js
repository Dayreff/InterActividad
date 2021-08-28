import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Login from './views/Login'
import Paquetes from './views/Paquetes'

class Rutas extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route
                        path="/views/Login"
                        component={Login}
                        access="guest"
                    />
                    <Route
                        path="/views/Paquetes"
                        component={Paquetes}
                        access="guest"
                    />
                </Switch>
            </Router>
            )
        }
    }
export default Rutas;