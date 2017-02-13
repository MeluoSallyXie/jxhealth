/**
 * Created by sally on 2017/2/11.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Home from './modules/Home'
import Repos from './modules/Repos'

render((
    <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/repos" component={Repos}/>
    </Router>
), document.getElementById('app'));

