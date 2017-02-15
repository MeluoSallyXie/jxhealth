/**
 * Created by sally on 2017/2/15.
 */

var React = require('react');
import { Link } from 'react-router'
var ReactDOM = require('react-dom');

var DocumentDetail = React.createClass({
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
module.exports = DocumentDetail;
