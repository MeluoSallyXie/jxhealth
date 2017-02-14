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
                    <table style="width: 100%;background-color: #3b3a3d;text-align: center" cellpadding="0"
                           cellspacing="0">
                        <tr>
                            <td style="width: 33%;">
                                <a href="#"><img
                                    src="app/image/wechatfooter/footerhome_active.png"/><p
                                    style="color: #fe8e19">服务首页</p></a>
                            </td>
                            <td>
                                <a href="/index.php?route=press/all&page=1&limit=10"><img
                                    src="app/image/wechatfooter/footerdoc.png"/><p >权威文章</p></a>
                            </td>
                            <td style="width: 33%;">
                                <a href="#"><img
                                    src="app/image/wechatfooter/footeruser.png"/><p >订单中心</p></a>
                            </td>
                        </tr>
                    </table>
                </footer>
            </div>
        );
    }
});
module.exports = BottomFooter;


