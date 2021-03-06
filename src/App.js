import React from 'react';
import logo from './logo.svg';
import './style/App.css';
import './style/style.scss';

import Calculator from './components/Calculator';
import List from './components/List';
import SocialCard from "./components/SocialCard";

function App() {
	return (
		<div className="App">
			<div className="exersiceContainer">
				<SocialCard
				link="www.danicaerediano.com"
				imagesrc="https://placeimg.com/600/400/any"
				profimagesrc="https://placekitten.com/g/64/64"
				imagealt="www.danicaerediano.com"
				title="Danica Erediano"
				text="Hello, I'm a Front End Developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in..."
				/>
				<List />
				<Calculator />
			</div>
	  </div>
	);
}

export default App;
