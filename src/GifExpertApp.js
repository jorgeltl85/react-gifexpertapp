import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
	//const categoriesData = [ 'One Punch', 'Samurai X', 'Dragon Ball' ];
	const categoriesData = [ 'One Punch' ];

	const [ categories, setCategories ] = useState(categoriesData);

	const addCategory = (e) => {
		//Esto no se hace, por que solo se asigna la referencia.
		//const categoriesA = categories;

		//Se debe hacer con un operador spread no asi debido a que no se puede mutar directamente
		//categoriesA.push('Los Enanos');

		//Opcion A con un operador spread
		//setCategories([...categories, 'Los Enanos']);

		//Opcion B con el callback
		setCategories((cats) => [ ...cats, 'HunterXHunter' ]);

		console.log(categories);
	};

	return (
		<div>
			<h2>GifExpertApp</h2>
			<hr />

			{/* <button onClick={addCategory}>Agregar</button> */}
			<AddCategory addCategory={(cat) => addCategory(cat)} setCategories={(cat) => setCategories(cat)} />
			<hr />
			<ol>
            {
                categories.map((category) => (
                    <GifGrid 
                        key={ category }
                        category = { category } 
                    />
                ))
            }
            </ol>
		</div>
	);
};
