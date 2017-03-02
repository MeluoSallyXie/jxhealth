/**
 * Created by sally on 2017/2/14.
 */
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    getInitialState: function () {
        return {
            weight: "",
            agree: "",
            realname: "",
            telephone: "",
            barcode: "",
            birthday: "",
            department: "",
            departmentvalue: "",
            height: "",
            lastmenstrualdate: "",
            gravidity: "",
            parity: "",
            vaginaldelivery: "",
            aesarean: "",
            spontaneousabortion: "",
            drug_inducedabortion: "",
            highriskfactor: "",
            district: "",
            addressvalue: "",
            address_1: ""
        }
    },
    calproductdate: function () {
        var lastyjdate = this.state.lastmenstrualdate;
        if (lastyjdate) {
            document.getElementsById("edc").innerHTML = this.addDate(lastyjdate, 280);
        }
    },

    addDate: function (date, days) {
        var d = new Date(date);
        d.setDate(d.getDate() + days);
        var month = d.getMonth() + 1;
        var day = d.getDate();
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        var val = d.getFullYear() + "-" + month + "-" + day;
        return val;
    },
    sendMsgBtn: function (event) {
        event.preventDefault();
    },
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    },
    componentWillMount: function () {
        document.title = '注册';
    },
    componentDidMount: function () {
        var top = document.getElementById("hr1").offsetTop - document.getElementById("title1").style.height / 2;
        console.log("componentDidMount" + document.getElementById("hr1").offsetTop);
        console.log("componentDidMount" + document.getElementById("title1").style.height);
        document.getElementById("title1").style.top = top + "px";
        var top2 = document.getElementById("hr2").offsetTop - document.getElementById("title2").style.height / 2;
        document.getElementById("title2").style.top = top2 + "px";
    },
    render: function () {

        return (
            <form action="" method="post" encType="multipart/form-data" id="register_form">
                <div className="register_title" id="title1">您的个人资料</div>
                <hr className="register_hr" id="hr1"/>
                <table className="register_outer" style={{marginBottom: "-1rem"}}>
                    <tbody>
                    <tr>
                        <td width="23%">
                            <label className="orangestar">*</label>
                            真实姓名
                        </td>
                        <td>
                            <input type="text" className="formcontroller" value={this.state.realname}
                                   onChange={this.handleChange} name="realname"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="orangestar">*</label>
                            手机号码
                        </td>
                        <td>
                            <input type="text" className="formcontroller" name="telephone" id="telephone"
                                   value={this.state.telephone} onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="orangestar">*</label>
                            验证码
                        </td>
                        <td>
                            <table className="sendMsg" cellPadding="0" cellSpacing="0">
                                <tbody>
                                <tr style={{height:"4rem"}}>
                                    <td>
                                        <input type="text" name="smscode" id="verificationcode"/>
                                    </td>
                                    <td className="sendMsgBtn" onClick={this.sendMsgBtn}>
                                        发送验证码
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="orangestar">*</label>
                            条形码
                        </td>
                        <td>
                            <input type="text" className="formcontroller" name="barcode" value={this.state.barcode}
                                   onChange={this.handleChange}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label className="orangestar">*</label>
                            出生日期
                        </td>
                        <td>
                            <input type="date" className="formcontroller" name="birthday" value={this.state.birthday}
                                   onChange={this.handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="orangestar">*</label>
                            保健科室
                        </td>
                        <td>
                            <input id="department" className="formcontroller" type="text" readOnly=""
                                   value={this.state.department} placeholder="选择科室" onChange={this.handleChange}/>
                            <input id="departmentvalue" type="hidden" name="department"
                                   value={this.state.departmentvalue} onChange={this.handleChange}/>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label className="orangestar">*</label>
                            身高
                        </td>
                        <td>
                            <table>
                                <tbody>
                                <tr>
                                    <td width="33%" align="left">
                            <span className="whitebtn" style={{width:"8.75rem"}}>
                                <input type="text" className="hiddenInput"
                                       name="height"
                                       value={this.state.height}
                                       id="input-height" onChange={this.handleChange}/>cm</span>
                                    </td>
                                    <td align="center"><label className="orangestar">*</label>体重</td>
                                    <td width="33%" align="right">
                            <span className="whitebtn" style={{width:"8.75rem"}}>
                                <input type="text" className="hiddenInput"
                                       name="weight" value={this.state.weight} onChange={this.handleChange}
                                       onkeyup="countindex()"
                                       id="input-weight"/>kg
                            </span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label className="orangestar">*</label>
                            BMI指数
                        </td>
                        <td>
                            <table>
                                <tbody>
                                <tr>
                                    <td width="40%" align="left">
                                        <label className="register_info"
                                               id="input-bmiindex"> </label>
                                    </td>
                                    <td align="center"><label className="orangestar">*</label>BMI类型
                                    </td>
                                    <td width="33%" align="right">
                                        <label className="register_info"
                                               id="input-bmitype"> </label>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className="register_outer">
                    <tbody>
                    <tr>
                        <td width="35%">
                            <label className="orangestar">*</label>
                            末次月经时间
                        </td>
                        <td>
                            <input type="date" className="formcontroller" name="lastmenstrualdate"
                                   value={this.state.lastmenstrualdate} onChange={this.calproductdate()}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className="register_outer">
                    <tbody>
                    <tr>
                        <td width="25%">
                            <label className="orangestar">*</label>
                            预产期
                        </td>
                        <td>
                            <label className="register_info" id="edc"></label>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="grayBorder">
                    <table className="register_outer">
                        <tbody>
                        <tr>
                            <td width="45%">
                                <label className="orangestar">*</label>孕次
                            </td>
                            <td width="20%">
                                <input type="number" className="formcontroller register_smallInput" name="gravidity"
                                       value={this.state.gravidity} onChange={this.handleChange}/>
                            </td>
                            <td width="45%">
                                <label className="orangestar">*</label>产次
                            </td>
                            <td>
                                <input type="number" className="formcontroller register_smallInput" name="parity"
                                       value={this.state.parity} onChange={this.handleChange}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <table className="register_outer">
                        <tbody>
                        <tr>
                            <td width="30%">
                                <label className="orangestar">*</label>分娩次数
                            </td>
                            <td width="20%">
                                <input type="number" className="formcontroller register_smallInput"
                                       name="vaginaldelivery"
                                       value={this.state.vaginaldelivery} onChange={this.handleChange}/>
                            </td>
                            <td width="30%">
                                <label className="orangestar">*</label>剖宫产次数
                            </td>
                            <td>
                                <input type="number" className="formcontroller register_smallInput" name="aesarean"
                                       value={this.state.aesarean} onChange={this.handleChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className="orangestar">*</label>自然流产次数
                            </td>
                            <td>
                                <input type="number" className="formcontroller register_smallInput"
                                       name="spontaneousabortion"
                                       value={this.state.spontaneousabortion} onChange={this.handleChange}/>
                            </td>
                            <td>
                                <label className="orangestar">*</label>人工药流次数
                            </td>
                            <td>
                                <input type="number" className="formcontroller register_smallInput"
                                       name="drug_inducedabortion"
                                       value={this.state.drug_inducedabortion} onChange={this.handleChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className="orangestar">*</label>是否高危
                            </td>
                            <td colSpan="3">
                                <span className="whitebtn active" name="isrisk" style={{marginRight:"4rem"}}>是</span>
                                <span className="whitebtn" name="isrisk">否</span>
                                <input type="hidden" name="highrisk" id="highrisk" value="是"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="orangestar">*</label>高危因素
                            </td>
                            <td colSpan="3">
                                <input type="text" className="formcontroller" id="dangerousreason" name="highriskfactor"
                                       value={this.state.highriskfactor} onChange={this.handleChange}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="register_title" id="title2">您的详细地址</div>
                <hr className="register_hr" id="hr2"/>
                <table className="register_outer">
                    <tbody>
                    <tr>
                        <td width="45%">
                            <label className="orangestar">*</label>是否为本市户口户籍
                        </td>
                        <td>
                            <span className="whitebtn active" name="household">是</span>
                            <span className="whitebtn" name="household" style={{marginLeft:"2rem"}}>否</span>
                            <input type="hidden" name="householdregister" id="householdregister" value="是"/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className="register_outer">
                    <tbody>
                    <tr>
                        <td width="25%">
                            <label className="orangestar">*</label>居住地区
                        </td>
                        <td>
                            <input id="address" name="district" className="formcontroller" type="text" readOnly=""
                                   placeholder="选择区域" value={this.state.district} onChange={this.handleChange}/>
                            <input id="addressvalue" type="hidden" value={this.state.addressvalue}
                                   onChange={this.handleChange}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className="register_outer">
                    <tbody>
                    <tr>
                        <td width="30%">
                            <label className="orangestar">*</label>家庭详细住址
                        </td>
                        <td>
                            <input type="text" className="formcontroller" name="address_1"
                                   value={this.state.address_1} onChange={this.handleChange}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="register_outer" style={{textAlign:"center"}}>
                    <div style={{marginTop:"3rem"}}>
                        <input type="checkbox" name="agree" value="1"
                               style={{height:"3rem",verticalAlign:"middle"}} value={this.state.agree}
                               onChange={this.handleChange}/><label style={{fontSize:"1.5rem"}}>我已阅读并同意
                        <Link to="/registerterms" style={{color:"#fe8e19"}}>用户协议</Link>
                    </label>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <span className="whitebtn active" style={{margin:"3rem"}} onclick=""
                              id="register_submitbtn">提交</span>
                    </div>
                </div>
            </form>
        );
    }
})
