import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Video from './pages/cadastro/Video';
import Categoria from './pages/cadastro/Categoria';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Pagina404 = () => <div>Pagina 404</div>;

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route component={Home} path='/' exact />
			<Route component={Video} path='/cadastro/video' />
			<Route component={Categoria} path='/cadastro/categoria' />
			<Route component={Pagina404} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
);
