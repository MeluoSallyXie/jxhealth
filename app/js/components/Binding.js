/**
 * Created by sally on 2017/2/14.
 */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
require("../lib/util");
let jsonp = require('../lib/jsonp');

class Binding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {realname: '', telephone: "", smscode: "", district: "", addressvalue: "", address_1: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMsg = this.sendMsg.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.realname.trim().length < 1 || this.state.realname.trim().length > 32) {
            alert("姓名格式不正确");
        }
        else if (this.state.telephone.trim().length < 1 || this.state.telephone.trim().length > 11) {
            alert("手机号码格式不正确");
        }
        else if (this.state.smscode.trim().length != 6) {
            alert("验证码格式不正确")
        }
        else if (this.state.addressvalue.trim().length < 1) {
            alert("服务区域不能为空")
        }
        else if (this.state.address_1.trim().length < 1) {
            alert("详细地址不能为空");
        }
        else {
            //submit
            var postData = {
                "telephone": this.state.telephone,
                "realname": this.state.realname,
                "smscode": this.state.smscode,
                "pregnantstatus": this.state.pregnantstatus,
                "district": this.state.district,
                "address_1": this.state.address_1
            };
            jsonp("/wechat/wechatbinding", postData, "POST", function (data) {
                if (data.code == 0) {
                    alert("绑定成功");
                }
                else {
                    console.error(data.message)
                }
            }.bind(this));
        }
    }

    sendMsg(event) {
        event.preventDefault();
        if(this.state.telephone.length==0){
            alert("请输入手机号码！");
            return ;
        }
        if(this.state.telephone.length!=11){
            alert("请输入有效的手机号码！");
            return ;
        }
        //发送验证码
        var postData = {"telephone": this.state.telephone};
        jsonp("/wechat/wechatbinding/validcode", postData, "POST", function (data) {
            alert(data.html);
            /*if (data.code == 0) {
             }
             else {
             console.error(data.message)
             }*/
        }.bind(this));
    }

    render() {
        return (
            <form action="" method="post" className="form-horizontal" id="bindingform">
                <table className="bind">
                    <tbody>
                    <tr>
                        <td>姓名</td>
                        <td className="colwidth">
                            <input type="text" name="realname" className="formcontroller" value={this.state.realname}
                                   onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>手机</td>
                        <td>
                            <input type="text" name="telephone" id="telephone" className="formcontroller"
                                   value={this.state.telephone} onChange={this.handleChange}/>
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
                                        <input type="text" name="smscode" id="verificationcode"
                                               onChange={this.handleChange}/>
                                    </td>
                                    <td className="sendMsgBtn" id="btnSendCode" onclick={this.sendMsg}>
                                        发送验证码
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>状态</td>
                        <td>
                            <select className="formcontroller" name="pregnantstatus" onChange={this.handleChange}>
                                <option value="0">未怀孕</option>
                                <option value="2">已生产</option>
                                <option value="3">孕产妇家属</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>服务区域</td>
                        <td>
                            <input id="address" name="district" className="formcontroller" type="text" readOnly=""
                                   placeholder="选择区域" value={this.state.district} onChange={this.handleChange}/>
                            <input id="addressvalue" type="hidden" name="addressvalue" value={this.state.addressvalue}
                                   onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>详细地址</td>
                        <td>
                            <input type="text" name="address_1" className="formcontroller" value={this.state.district}
                                   onChange={this.handleChange}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="bindBottom">
                    <span className="whitebtn active bindBtn" id="register_submitbtn"
                          onClick={this.handleSubmit}>提交</span>
                </div>
            </form>
        );
    }
}

module.exports = Binding;



