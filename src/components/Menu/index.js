import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
	return (
		<nav className='Menu'>
			<Link to='/'>
				<img className='Logo' alt='logo' src={Logo}></img>
			</Link>
			<Link to='/cadastro/video'>
				<Button as={Link} className='ButtonLink'>
					Novo video
				</Button>
			</Link>
		</nav>
	);
}

export default Menu;
