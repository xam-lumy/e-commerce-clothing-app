import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase.utils";
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignIn from '../../components/sign-in/sign-in.component';

import { AuthenticationContainer} from './authentication.styles'



  
const Authenticate = () => {
    return(
        <AuthenticationContainer>
            <SignIn />
            <SignUpForm />
            
        </AuthenticationContainer>
        
    );
}


export default Authenticate;