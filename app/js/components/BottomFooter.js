/**
 * Created by sally on 2017/2/14.
 */
/**
 * Created by sally on 2017/2/14.
 */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var BottomFooter = React.createClass({
    handleClick: function () {

    },
    render: function () {
        return (
            <div>
                <div className="footer_mobile"></div>
                <footer className="footer_mobile v2_footwrap">
                    <table>
                        <tbody>
                        <tr>
                            <td width="33%">
                                <a href="#"><img
                                    src="app/image/wechatfooter/footerhome_active.png"/><p
                                    className="active">服务首页</p></a>
                            </td>
                            <td>
                                <a href="#"><img
                                    src="app/image/wechatfooter/footerdoc.png"/><p >权威文章</p></a>
                            </td>
                            <td width="33%">
                                <a href="#"><img
                                    src="app/image/wechatfooter/footeruser.png"/><p >订单中心</p></a>
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


