import React from 'react';
import './index.css'
import {render} from 'react-snapshot';
import { BrowserRouter, Route } from 'react-router-dom';
import Blog from './Blog'
import {Article1, Article2} from './Components/BlogLanding/articles/articles'
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
				<Route exact path='/blog' component={Blog} />
				<Route exact path='/blog/article/1' component={Article1} />
				<Route exact path='/blog/article/2' component={Article2} />
			</div>
		</BrowserRouter>
	</LocalizeProvider>
	,
	document.getElementById('root')
);