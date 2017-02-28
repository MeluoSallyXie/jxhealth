/**
 * Created by sally on 2017/2/14.
 */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link,IndexLink, browserHistory } from 'react-router'

var BottomFooter = React.createClass({
    render: function () {
        return (
            <div>
                <div className="footer_mobile"></div>
                <footer className="footer_mobile v2_footwrap">
                    <table>
                        <tbody>
                        <tr>
                            <td width="33%">
                                {(() => {
                                    if (this.props.nav == "home") {
                                        return (
                                            <Link to="/">
                                                <img src="app/image/wechatfooter/footerhome_active.png"/><p
                                                className="active">服务首页</p>
                                            </Link>
                                        )
                                    }
                                    else {
                                        return (
                                            <Link to="/">
                                                <img src="app/image/wechatfooter/footerhome.png"/><p>服务首页</p>
                                            </Link>
                                        )
                                    }
                                })()}
                            </td>
                            <td>
                                {(() => {
                                    if (this.props.nav == "blog") {
                                        return (
                                            <Link to="/pressall"><img
                                                src="app/image/wechatfooter/footerdoc_active.png"/><p className="active">权威文章</p></Link>
                                        )
                                    }
                                    else {
                                        return (
                                            <Link to="/pressall"><img
                                                src="app/image/wechatfooter/footerdoc.png"/><p>权威文章</p></Link>
                                        )
                                    }
                                })()}
                            </td>
                            <td width="33%">
                                {(() => {
                                    if (this.props.nav == "order") {
                                        return (
                                            <Link to="/ordercenter"><img
                                                src="app/image/wechatfooter/footeruser_active.png"/><p className="active">订单中心</p></Link>
                                        )
                                    }
                                    else {
                                        return (
                                            <Link to="/ordercenter"><img
                                                src="app/image/wechatfooter/footeruser.png"/><p>订单中心</p></Link>
                                        )
                                    }
                                })()}

                            </td>
                        </tr>
                        </tbody>
                    </table>
                </footer>
            </div>
        );
    }
});
module.exports = BottomFooter;


