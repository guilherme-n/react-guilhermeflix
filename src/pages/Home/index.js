import React from 'react';
import './App.css';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../pages/PageDefault';

function Home() {
	return (
		<div style={{ background: '#141414' }}>
			<PageDefault>
				<BannerMain
					videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
					url={dadosIniciais.categorias[0].videos[0].url}
					videoDescription='O que é Front-end? Trabalhando na área'
				/>
				<Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
				<Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
				<Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />
				<Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />
				<Carousel ignoreFirstVideo category={dadosIniciais.categorias[4]} />
			</PageDefault>
		</div>
	);
}

export default Home;
