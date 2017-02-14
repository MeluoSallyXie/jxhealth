/**
 * Created by sally on 2017/2/14.
 */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Binding = React.createClass({
    render: function () {
        return (
            <form action="" method="post"  className="form-horizontal" id="bindingform">
                <table className="bind">
                    <tbody>
                    <tr>
                        <td>姓名</td>
                        <td className="colwidth">
                            <input type="text" name="realname" className="formcontroller" value={this.props.realname}/>
                        </td>
                    </tr>
                    <tr>
                        <td>手机</td>
                        <td>
                            <input type="text" name="telephone" id="telephone" className="formcontroller" value={this.props.telephone}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            验证码
                        </td>
                        <td>
                            <table className="sendMsg">
                                <tbody>
                                <tr>
                                    <td>
                                        <input type="text" name="smscode" id="verificationcode" />
                                    </td>
                                    <td className="sendMsgBtn" id="btnSendCode">
                                        发送验证码
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>服务区域</td>
                        <td>
                            <input id="address" name="district" className="formcontroller" type="text" readOnly="" placeholder="选择区域"/>
                            <input id="addressvalue" type="hidden"/>
                        </td>
                    </tr>
                    <tr>
                        <td>详细地址</td>
                        <td>
                            <input type="text" name="address_1" className="formcontroller" value=""/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="bindBottom">
                    <span className="whitebtn active bindBtn" id="register_submitbtn">提交</span>
                </div>
            </form>
        );
    }
});
module.exports = Binding;



