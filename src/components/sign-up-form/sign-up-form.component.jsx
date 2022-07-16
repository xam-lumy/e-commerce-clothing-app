import { useState} from 'react'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import {Header, SignUpContainer} from './sign-up-form.styles';
// import { UserContext } from '../../contexts/user.context';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '' 
}

const SignUpForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email,  password, confirmPassword} = formFields;

    //  const { setCurrentUser } = useContext(UserContext);
    // console.log(setCurrentUser)

    console.log(formFields)
    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event)=>{
        event.preventDefault();
       if(password !== confirmPassword){

        alert("password do not match");
        return;
       }
       try {
        
        const {user} = createAuthUserWithEmailAndPassword(email, password);
        // setCurrentUser(user);

        await createUserDocumentFromAuth(user, {displayName});
        resetFormFields()

       } catch(error){
        
        console.log(error)
       }
    }
   const handleChange = (event)=>{
    const {name, value} = event.target;

    setFormFields({ ...formFields, [name]: value});
   }

    return (
        <SignUpContainer>
            <Header>Don't have an account?</Header>
            <span>Sign Up With your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name' 
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name='displayName' 
                    value={displayName}  
                 />
                <FormInput 
                    label='Email' 
                    type='email' 
                    required 
                    onChange={handleChange} 
                    name='email' 
                    value={email}  
                />
                <FormInput 
                    label='Password' 
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='password' 
                    value={password}  
                />
                <FormInput 
                    label='Confirm Password' 
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name='confirmPassword' 
                    value={confirmPassword}  
                />
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type='submit'>submit</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;