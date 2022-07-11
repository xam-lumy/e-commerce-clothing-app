

import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase.utils";
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignIn from '../../components/sign-in/sign-in.component';

import './authentication.styles.scss'



  
const Authenticate = () => {
    return(
        <div className="authentication-container">
            <SignIn />
            <SignUpForm />
            
        </div>
        
    );
}


export default Authenticate;