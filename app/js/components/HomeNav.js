/**
 * Created by sally on 2017/2/13.
 */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var HomeNav = React.createClass({
    render: function() {
        return (
            <div className={this.props.className}>
            <img src={this.props.srcimg} />
            <div>{this.props.description}</div>
            </div>
        );
    }
});
module.exports = HomeNav;
