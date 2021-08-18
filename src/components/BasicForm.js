import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const {
    value: enteredName,
    error: errorName,
    isValid: nameIsValid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredLastName,
    error: errorLastName,
    isValid: lastNameIsValid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    error: errorEmail, 
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler, 
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput( value => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;

  if (nameIsValid && emailIsValid && lastNameIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
  
    if (!formIsValid) {
      return;
    }

    resetName();
    resetLastName();
    resetEmail();
  }

  const nameInputClasses = !errorName ? 'form-control' : 'form-control invalid';
  const lastNameInputClasses = !errorLastName ? 'form-control' : 'form-control invalid';
  const emailInputClasses = !errorEmail ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {errorName && <p className="error-text">Name must be no empty</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='last_name'>Last Name</label>
          <input 
            type='text' 
            id='last_name' 
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {errorLastName && <p className="error-text">Lastname must be no empty</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          />
          {errorEmail && <p className="error-text">Email must be no empty</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
