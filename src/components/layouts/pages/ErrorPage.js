import React from 'react';
import '../../styles/ErrorPage.scss';
import {NavLink} from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="error">
            <h2>ERROR</h2>
            <NavLink to='/' className="error__button">
            back to the main page
      </NavLink>
        </div>
    )
}

export default ErrorPage
