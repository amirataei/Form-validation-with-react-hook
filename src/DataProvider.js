import React, {useEffect , useState, createContext , useCallback} from 'react';

export const DataContext = createContext();

export const DataProvider = ( props) => {
	const [values, setValues] = useState({
		username: '',
		email: '',
		password: '',
		password2: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
	const handleSubmit = (e) => {
    e.preventDefault();
    
    setErrors(values);
    setIsSubmitting(true);
  };
  
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  
	let error = {};

	if (!values.username.trim()) {
		error.username = 'Username required';
	}
	if (!values.email) {
		error.email = 'Email required';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		error.email = 'Email address is invalid';
	}
	if (!values.password) {
		error.password = 'Password is required';
	} else if (values.password.length < 6) {
		error.password = 'Password needs to be 6 characters or more';
	}

	if (!values.password2) {
		error.password2 = 'Password is required';
	} else if (values.password2 !== values.password) {
		error.password2 = 'Passwords do not match';
	}

	return (

        <DataContext.Provider value={{ handleSubmit , handleChange , values , error , isSubmitting , isSubmitted , setIsSubmitted}}>
           {props.children}
        </DataContext.Provider>

  )
};
