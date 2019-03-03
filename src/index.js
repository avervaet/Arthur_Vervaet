import React from 'react';
import './index.css'
import {render} from 'react-snapshot';
import { BrowserRouter, Route } from 'react-router-dom';
import Blog from './Blog'
import Main from './Main';
import Navbar from './Components/Navbar/Navbar';
import { LocalizeProvider } from "react-localize-redux";

render(
	<LocalizeProvider>
		<BrowserRouter>
			<div>
				<header className="App-header">
		            <Navbar />
		        </header>
				<Route exact path='/' component={Main} />
				<Route path='/blog' component={Blog} />
			</div>
		</BrowserRouter>
	</LocalizeProvider>
	,
	document.getElementById('root')
);