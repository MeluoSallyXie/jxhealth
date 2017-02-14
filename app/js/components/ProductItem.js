/**
 * Created by sally on 2017/2/14.
 */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var ProductItem = React.createClass({
    render: function() {
        var item;
        item=(
            <div class="productItem">
                <a href="#"><img src={this.props.thumb}/></a>
                <table>
                    <tr>
                        <td style="width: 50%;" class="title">{this.props.name}</td>
                        <td class="money" style="border-right: none;">
                            ￥<label class="moneyNum">{this.props.price}</label>
                        </td>
                    </tr>
                </table>
            </div>
        );
        return item;
    }
});
module.exports = ProductItem;