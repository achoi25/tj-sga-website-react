import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';

import './App.css';

import index from './pages/index';
import initiatives from './pages/initiatives';
import mission from './pages/mission';
import news from './pages/news';
import newsArticle from './pages/newsArticle';
import notFound from './pages/404';
import officers from './pages/officers';
import committee from './pages/committee';

export default function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route path='/initiatives' exact component={initiatives} />
					<Route path='/news/:articleId' component={newsArticle} />
					<Route path='/news' exact component={news} />
					<Route path='/mission' exact component={mission} />
					<Route path='/officers' exact component={officers} />
					<Route path='/committee' exact component={committee} />
					<Route path='/:path' component={notFound} />
					<Route path='/' exact component={index} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}
