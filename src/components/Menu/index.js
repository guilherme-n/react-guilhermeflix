import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from '../ButtonLink';

function Menu() {
	return (
		<nav className='Menu'>
			<a href='/'>
				<img className='Logo' alt='logo' src={Logo}></img>
			</a>
			<ButtonLink className='ButtonLink' href='/'>
				Novo video
			</ButtonLink>
		</nav>
	);
}

export default Menu;
