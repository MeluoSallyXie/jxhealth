/**
 * Created by sally on 2017/2/14.
 */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Document = React.createClass({
    render: function () {
        var item;
        item = (
            <div className="userinfoList">
                <Link to={this.props.action} >{this.props.title}<img src="app/image/userinfoimg3.png" /></Link>
            </div>
        );
        return item;
    }
});
module.exports = Document;
