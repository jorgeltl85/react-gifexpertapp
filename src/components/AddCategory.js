import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {addCategory, setCategories } ) => {
	const [ inputValue, setinputValue ] = useState(''); //en vez de undefine

	const handleInputChange = (e) => {
		console.log(e.target.value);
		setinputValue(e.target.value);
	};

	const handleSubmit = (e) => {
        //Evita que se envie todo el formulario y solo se ejecuta este codigo
        //Por que en el momento de hacer un submit se refresca todo y se recarga
        e.preventDefault();
        console.log("Handle submit")
        //addCategory();
        
        if(inputValue.trim().length>2){

            setCategories((cats) => [ inputValue, ...cats ]);
            setinputValue('');
        }

    };

	return (
		<form onSubmit={ (e)=> handleSubmit(e) }>
			<input type="text" 
            value={inputValue} 
            onChange={(e) => handleInputChange(e)} />
		</form>
	);
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


