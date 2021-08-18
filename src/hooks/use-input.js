import React, { useState } from 'react'

const useInput = (validateValue) => {
    const [inputValue, setInputValue] = useState('');
    const [inputTouched, setInputTouched] = useState(false);

    const valueIsValid = validateValue(inputValue);
    const error = !valueIsValid && inputTouched;

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
        setInputTouched(true);
    };

    const inputBlurHandler = (event) => {
        setInputTouched(true);

    }

    const reset = () => {
        setInputValue('');
        setInputTouched(false);
    };
    return {
        value: inputValue,
        error,
        isValid: valueIsValid,
        inputBlurHandler,
        inputChangeHandler,
        reset
    }
};

export default useInput;