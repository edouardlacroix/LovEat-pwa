import React from 'react'
import { Route, Redirect } from "react-router-dom";
import Topbar from '../../../Components/Topbar'
import Navbar from '../../../Components/Navbar'
import { useCookies } from 'react-cookie';
import './styles.css'

const PrivateRoute = ({ children, ...rest }) => {
    // Access cookie to check if token is present
    const [auth] = useCookies("USER")
    return (
        <Route
            {...rest}
            render={({ location }) =>

                // If the token is set in the cookie the user can access the private pages
                // auth?.USER?.token ? (
                true ? (

                    <div className={'privateRoute-wrapper'}>
                        {/* Here we can set element on top of the page to keep a clean frame and css and avoid repetition of import */}
                        <div className={'privateRoute-topbar-wrapper'}>
                            <Topbar />
                        </div>
                        <div className={'privateRoute-content-wrapper'}>
                            {children}
                        </div>
                        <div className={''}>
                            <Navbar />
                        </div>
                    </div>
                ) : (
                        // If the token is not present, we redirect to the login page
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}
export default PrivateRoute
