import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../../authorization/modules/Auth';


const Header = ({ children }) => (
    <div>
        <div className="top-bar">
            <div className="top-bar-left">
                <IndexLink to="/">React App</IndexLink>
            </div>

            {Auth.isUserAuthenticated() ? (
                <div className="top-bar-right">
                    <Link to="/logout">Log out</Link>
                </div>
            ) : ''}

        </div>

        { /* child component will be rendered here */ }
        {children}

    </div>
);

Header.propTypes = {
    children: PropTypes.object.isRequired
};

export default Header;