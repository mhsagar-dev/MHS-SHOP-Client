import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig); 
     }

    const handleLogin = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
        const {displayName, email} = result.user;
        const signedInUser = {name: displayName, email};
        setLoggedInUser(signedInUser);
        history.replace(from);
        }).catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
     }
    return (
        <div className="container"> 
            <div className='text-center'>
                <button onClick={handleLogin} className='btn btn-danger mt-5 rounded'> <FontAwesomeIcon icon={faGoogle} /> Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;