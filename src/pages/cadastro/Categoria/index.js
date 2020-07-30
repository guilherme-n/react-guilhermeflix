import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../PageDefault';

function Categoria() {
	return (
		<PageDefault>
			<h1>Cadastro de categoria</h1>
			<Link to='/'>Ir para home</Link>
		</PageDefault>
	);
}

export default Categoria;