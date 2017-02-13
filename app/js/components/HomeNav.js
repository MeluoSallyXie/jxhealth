/**
 * Created by sally on 2017/2/13.
 */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var HomeNav = React.createClass({
    render: function() {
        return (
            <div className="homenav nav1">
            <img src="app/image/homenavimg1.png" />
            <div>泌乳调理</div>
            </div>
        );
    }
});
module.exports = HomeNav;
