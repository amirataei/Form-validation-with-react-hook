import React, { useState , useContext} from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { DataContext } from '../src/DataProvider';
const Form = () => {
  
	const {isSubmitted , setIsSubmitted , error  } = useContext(DataContext);
  
  function submitForm() {
    setIsSubmitted(true);
  }
  
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
       
        {isSubmitted && !error.username && !error.email && !error.password && !error.password2   ? <FormSuccess /> : <FormSignup submitForm={submitForm}/>}
        
      </div>
    </>
  );
};

export default Form;