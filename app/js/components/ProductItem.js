/**
 * Created by sally on 2017/2/14.
 */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var ProductItem = React.createClass({
    render: function () {
        var item;
        item = (
            <div className="productItem">
                <a href="#"><img src={this.props.thumb}/></a>
                <table>
                    <tr>
                        <td width="50%" className="title">{this.props.name}</td>
                        <td className="money" className="borderRNone">
                            ￥<label className="moneyNum">{this.props.price}</label>
                        </td>
                    </tr>
                </table>
            </div>
        );
        return item;
    }
});
module.exports = ProductItem;