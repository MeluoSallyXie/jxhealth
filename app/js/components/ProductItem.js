/**
 * Created by sally on 2017/2/14.
 */
'use strict';
import { Router, Route, Link, browserHistory } from 'react-router'
var React = require('react');
var ReactDOM = require('react-dom');

var ProductItem = React.createClass({
    render: function () {
        var item;
        if(Number(this.props.service_timer)==0){
            item = (
                <div className="productItem">
                    <img src={this.props.thumb}/>
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
                            <td width="33%" className="title">{this.props.name}</td>
                            <td className="money">
                                ￥<label className="moneyNum">{this.props.price}</label>
                            </td>
                            <td width="33%">
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