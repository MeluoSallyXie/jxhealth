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
import Document from './modules/Document'
import Advise from './modules/Advise'
import PersonalInfo from './modules/PersonalInfo'
import PressAll from './modules/PressAll'
import Press from './modules/Press'
import Repos from './modules/Repos'


render((
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/productcategory/:id" component={ProductCategory}/>
        <Route path="/binding" component={WechatBinding}/>
        <Route path="/documents" component={Documents}/>
        <Route path="/documents/:id" component={Document}/>
        <Route path="/advise" component={Advise}/>
        <Route path="/personalinfo" component={PersonalInfo}/>
        <Route path="/pressall" component={PressAll}/>
        <Route path="/pressall/:id" component={Press}/>
        <Route path="/pressall/:id" component={Press}/>
        <Route path="/repos" component={Repos}/>
    </Router>
), document.getElementById('app'));

