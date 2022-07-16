import { useState} from "react";
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup, } from "../../utils/firebase.utils";
import { SignInContainer, SignInHeader, SignInButtonsContainer } from "./sign-in.styles";
// import {UserContext} from '../../contexts/user.context';


import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import './sign-in.styles.jsx';



const defaultFormFields= {
    email: '',
    password: ''
}

const SignIn= ()=>{

    const [formFields, setFormFields]= useState(defaultFormFields);
    const {email, password} = formFields;

    // const { setCurrentUser } = useContext(UserContext)

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle =  async ()=> {
     await signInWithGooglePopup();
         
    };

    const onHandleSubmit=async (event) =>{
        event.preventDefault();
        try{
            await signInAuthUserWithEmailAndPassword (email, password);
            // setCurrentUser(user)

            resetFormFields()
        } catch (error){
           switch(error.code) {
            case 'auth/wrong-password':
                alert('incorrect password for email');
                break
                case 'auth/user-not-found':
                alert('no user associated with this email')
                break;
                default:
                    console.log(error)
           } 
        }

    }
    const onHandleChange= (event)=>{

        const {name, value}= event.target
        setFormFields({...formFields, [name]: value})
    }

   
    return(
        <SignInContainer>
            <SignInHeader>Already have an account? login</SignInHeader>
            <form onSubmit={onHandleSubmit}>
                <FormInput 
                    label='email' 
                    required 
                    type='email' 
                    onChange={onHandleChange} 
                    name='email' 
                    value={email} 
                />
                <FormInput 
                    label='password' 
                    required 
                    type='password' 
                    onChange={onHandleChange} 
                    name='password' 
                    value={password} 
                />
                <SignInButtonsContainer>
                    <Button type='submit' buttonType='inverted'>Sign in</Button>
                    <Button type='button' onClick={signInWithGoogle}  buttonType={BUTTON_TYPE_CLASSES.google}>Google sign in</Button>
                </SignInButtonsContainer>
                    
            </form>
            
        </SignInContainer>
    )

}

export default SignIn;