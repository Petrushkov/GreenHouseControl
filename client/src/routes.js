import Header from './common/components/Header.jsx';
import Home from './common/components/Home.jsx';
import Main from './common/containers/Main.jsx';
import LoginPage from './authorization/containers/LoginPage.jsx';
import Auth from './authorization/modules/Auth';


const routes = {
    // base component (wrapper for the whole application).
    component: Header,
    childRoutes: [

        {
            path: '/',
            getComponent: (location, callback) => {
                if (Auth.isUserAuthenticated()) {
                    callback(null, Main);
                } else {
                    callback(null, LoginPage);
                }
            }
        },

        {
            path: '/login',
            component: LoginPage
        },

        {
            path: '/logout',
            onEnter: (nextState, replace) => {
                Auth.deauthenticateUser();

                // change the current URL to /
                replace('/');
            }
        }

    ]
};

export default routes;