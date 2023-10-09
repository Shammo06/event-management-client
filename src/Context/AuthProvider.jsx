import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const [loading, setLoading] = useState(true);

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const shareData ={
        createUser      
    }
    return (
        <AuthContext.Provider value={shareData} >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children : PropTypes.node
}

console.log(AuthContext)
export default AuthProvider;