import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import Game from './components/tictac/TicTacPage';
import Variable from './components/basics/variables';

export default (
<Route path ="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path ="about"component={AboutPage} />
    <Route path ="courses"component={CoursesPage} />
     <Route path ="tictac"component={Game} />
     <Route path ="basic"component={Variable} />
</Route>
);


