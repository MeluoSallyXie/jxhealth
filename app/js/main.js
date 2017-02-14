/**
 * Created by sally on 2017/2/11.
 */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Home from './modules/Home'
import ProductCategory from './modules/ProductCategory'
import WechatBinding from './modules/WechatBinding'
import Documents from './modules/Documents'
import Repos from './modules/Repos'

render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/productcategory/:id" component={ProductCategory}/>
        <Route path="/binding" component={WechatBinding}/>
        <Route path="/documents" component={Documents}/>
        <Route path="/repos" component={Repos}/>
    </Router>
), document.getElementById('app'));

