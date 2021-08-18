import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {


  const {
    value: enteredName,
    error: errorName, 
    isValid: nameIsValid,
    inputChangeHandler: nameChangeHandler, 
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput( value => value.trim() !== '');

  const {
    value: enteredEmail,
    error: errorEmail, 
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler, 
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput( value => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
  
    if (errorName || errorEmail) {
      return;
    }
    
    resetName();
    resetEmail();

  }

  const nameInputClasses = !errorName ? 'form-control' : 'form-control invalid';
  const emailInputClasses = !errorEmail ? 'form-control' : 'form-control invalid';
  
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {errorName && <p className="error-text">Name must be no empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {errorName && <p className="error-text">Email must be no empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
