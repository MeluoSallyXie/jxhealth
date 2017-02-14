/**
 * Created by sally on 2017/2/14.
 */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
require("../lib/util");

class Binding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {realname: '',telephone:"",smscode:"",district:"",addressvalue:"",address_1:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event){
        if(this.state.realname.trim().length<1||this.state.realname.trim().length>32){
            alert("姓名格式不正确");
        }
        else if(this.state.telephone.trim().length<1||this.state.telephone.trim().length>11){
            alert("手机号码格式不正确");
        }
        else if(this.state.smscode.trim().length!=6){
            alert("验证码格式不正确")
        }
        else if(this.state.addressvalue.trim().length<1){
            alert("服务区域不能为空")
        }
        else if(this.state.address_1.trim().length<1){
            alert("详细地址不能为空");
        }
        else {
            //submit
            event.preventDefault();
        }
    }
    sendMsg(){
        //发送验证码
    }
    render() {
        return (
            <form action="" method="post"  className="form-horizontal" id="bindingform">
                <table className="bind">
                    <tbody>
                    <tr>
                        <td>姓名</td>
                        <td className="colwidth">
                            <input type="text" name="realname" className="formcontroller" value={this.state.realname} onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>手机</td>
                        <td>
                            <input type="text" name="telephone" id="telephone" className="formcontroller" value={this.state.telephone} onChange={this.handleChange}/>
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
                                        <input type="text" name="smscode" id="verificationcode" onChange={this.handleChange} />
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
                        <td>服务区域</td>
                        <td>
                            <input id="address" name="district" className="formcontroller" type="text" readOnly="" placeholder="选择区域" value={this.state.district} onChange={this.handleChange}/>
                            <input id="addressvalue" type="hidden" name="addressvalue" value={this.state.addressvalue} onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>详细地址</td>
                        <td>
                            <input type="text" name="address_1" className="formcontroller" value={this.state.district} onChange={this.handleChange} />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="bindBottom">
                    <span className="whitebtn active bindBtn" id="register_submitbtn" onClick={this.handleSubmit}>提交</span>
                </div>
            </form>
        );
    }
}

module.exports = Binding;



