/**
 * Created by sally on 2017/2/14.
 */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var ProductItem = React.createClass({
    render: function () {
        var item;
        if(Number(this.props.service_timer)==0){
            item = (
                <div className="productItem">
                    <a href="#"><img src={this.props.thumb}/></a>
                    <table>
                        <tbody>
                        <tr>
                            <td width="50%" className="title">{this.props.name}</td>
                            <td className="money borderRNone">
                                ￥<label className="moneyNum">{this.props.price}</label>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
        else {
            item = (
                <div className="productItem">
                    <a href="#"><img src={this.props.thumb}/></a>
                    <table>
                        <tbody>
                        <tr>
                            <td style="width: 33%;" class="title">{this.props.name}</td>
                            <td className="money">
                                ￥<label className="moneyNum">{this.props.price}</label>
                            </td>
                            <td style="width: 33%;">
                            <span className="time">
                               {this.props.service_timer}分钟
                            </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
        return item;
    }
});
module.exports = ProductItem;