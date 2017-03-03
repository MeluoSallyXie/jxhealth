/**
 * Created by sally on 2017/2/14.
 */
import React from 'react'
import { Link } from 'react-router'
let jsonp = require('../lib/jsonp');
require('../../css/LArea.css');
require('../lib/LArea');
require('../lib/util');

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            headimgurl:"",
            weight: "",
            householdregister: false,
            agree: false,
            realname: "",
            telephone: "",
            barcode: "",
            birthday: "",
            department: "",
            depname: "",
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
            address_1: "",
            highrisk: false
        }
    },
    calproductdate: function (value) {
        var lastyjdate = value;
        console.log("calproductdate:" + lastyjdate);
        if (lastyjdate) {
            document.getElementById("edc").innerHTML = this.addDate(lastyjdate, 280);
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
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        if (name == "weight") {
            this.countindex(value);
        }
        else if (name == "lastmenstrualdate") {
            this.calproductdate(value);
        }
    },
    countindex: function (event) {
        if (document.getElementById("input-weight").value.trim().length == 0) {
            return;
        }
        var bmiindex = document.getElementById("input-weight").value / (Math.pow(document.getElementById("input-height").value, 2) / 10000);
        var bmiindex = bmiindex.toFixed(2);
        document.getElementById("input-bmiindex").innerHTML = bmiindex;
        if (bmiindex < "18.5") {
            // echo "过轻"; $bmitype = "0";
            document.getElementById("input-bmitype").innerHTML = "过轻";
        }
        else if (bmiindex < "25") {
            //echo "正常"; $bmitype = "1";
            document.getElementById("input-bmitype").innerHTML = "正常";
        }
        else if (bmiindex < "28") {
            //echo "过重"; $bmitype = "2";
            document.getElementById("input-bmitype").innerHTML = "过重";
        }
        else if (bmiindex < "32") {
            //echo "肥胖"; $bmitype = "3";
            document.getElementById("input-bmitype").innerHTML = "肥胖";
        }
        else {
            //echo "非常肥胖"; $bmitype = "4";
            document.getElementById("input-bmitype").innerHTML = "非常肥胖";
        }
    },
    handleHousehold: function (event) {
        event.preventDefault();
        var reg = new RegExp('(\\s|^)' + "active" + '(\\s|$)');
        document.getElementsByName("household")[0].className = event.target.className.replace(reg, ' ');
        document.getElementsByName("household")[1].className = event.target.className.replace(reg, ' ');
        event.target.className += " " + "active";
        if (event.target.innerHTML == "是") {
            document.getElementById("householdregister").value = "是";
            this.setState({householdregister: "是"});
        } else {
            document.getElementById("householdregister").value = "否";
            this.setState({householdregister: "否"});
        }
    },
    handleIsrisk: function (event) {
        event.preventDefault();
        var reg = new RegExp('(\\s|^)' + "active" + '(\\s|$)');
        document.getElementsByName("isrisk")[0].className = event.target.className.replace(reg, ' ');
        document.getElementsByName("isrisk")[1].className = event.target.className.replace(reg, ' ');
        event.target.className += " " + "active";
        if (event.target.innerHTML == "是") {
            document.getElementById("dangerousreason").disabled = false;
            document.getElementById("highrisk").value = "true";
            this.setState({highrisk: "true"});
        } else {
            document.getElementById("dangerousreason").disabled = true;
            document.getElementById("dangerousreason").value = "";
            document.getElementById("highrisk").value = "false";
            this.setState({highrisk: "false"});
        }
    },
    handleRegister: function (event) {
        event.preventDefault();
        if (this.state.realname.trim().length < 1 || this.state.realname.trim().length > 32) {
            alert("姓名格式不正确");
        }
        else if (this.state.telephone.trim().length < 1 || this.state.telephone.trim().length > 11) {
            alert("手机号码格式不正确");
        }
        else if (this.state.barcode.trim().length == 0) {
            alert("条形码不能为空");
        }
        else if (this.state.birthday.trim().length == 0) {
            alert("出生日期不能为空");
        }
        else if (this.state.height.trim().length == 0) {
            alert("身高不能为空");
        }
        else if (this.state.height.trim().length == 0) {
            alert("体重不能为空");
        }
        else if (this.state.lastmenstrualdate.trim().length == 0) {
            alert("末次月经时间不能为空");
        }
        else if (this.state.gravidity.trim().length == 0) {
            alert("孕次不能为空");
        }
        else if ((typeof this.state.gravidity) == "number") {
            alert("孕次必须为数字");
        }
        else if (this.state.parity.trim().length == 0) {
            alert("产次不能为空");
        }
        else if ((typeof this.state.parity) == "number") {
            alert("产次必须为数字");
        }
        else if (this.state.vaginaldelivery.trim().length == 0) {
            alert("分娩次数不能为空");
        }
        else if ((typeof this.state.vaginaldelivery) == "number") {
            alert("分娩次数必须为数字");
        }
        else if (this.state.aesarean.trim().length == 0) {
            alert("剖宫产次不能为空");
        }
        else if ((typeof this.state.aesarean) == "number") {
            alert("剖宫产次必须为数字");
        }
        else if (this.state.highrisk == "true" && this.state.highriskfactor.trim().length == 0) {
            alert("高危因素不能为空");
        }
        else if (this.state.address_1.trim().length == 0) {
            alert("家庭详细地址不能为空");
        }
        else if (!this.state.agree) {
            alert("请阅读协议并确认");
        }
        else {
            var postData = this.state;
            jsonp("/wechat/edituser/modify", postData, "POST", function (data) {
                if (data.code == 0) {
                    this.context.router.push("/baseinfo");
                }
                else {
                    alert(data.message);
                }
            }.bind(this));
        }

    },
    componentDidMount: function () {


        var postData = null;
        jsonp("/wechat/edituser", postData, "POST", function (data) {
            if (data.code == 0) {
                var provs_data = data.data.province;
                var citys_data = data.data.city;
                var dists_data = data.data.district;
                var allcitys_data = data.data.allcities;
                var deps_data = data.data.office;
                var area2 = new LArea();
                area2.init({
                    'trigger': '#address',
                    'valueTo': '#addressvalue',
                    'keys': {
                        id: 'id',
                        name: 'name'
                    },
                    'type': 2,
                    'data': [provs_data, citys_data, dists_data]
                });

                var area1 = new LArea();
                area1.init({
                    'trigger': '#department',
                    'valueTo': '#departmentvalue',
                    'keys': {
                        id: 'id',
                        name: 'name'
                    },
                    'type': 2,
                    'data': [allcitys_data, dists_data, deps_data]
                });
                this.setState({
                    headimgurl:data.data.headimgurl,
                    realname:data.data.realname,
                    telephone:data.data.telephone,
                    barcode:data.data.barcode,
                    birthday:data.data.birthday,
                    department:data.data.department,
                    height:data.data.height,
                    weight:data.data.weight,
                    lastmenstrualdate:data.data.lastmenstrualdate,
                    gravidity:data.data.gravidity,
                    parity:data.data.parity,
                    vaginaldelivery:data.data.vaginaldelivery,
                    aesarean:data.data.aesarean,
                    spontaneousabortion:data.data.spontaneousabortion,
                    drug_inducedabortion:data.data.drug_inducedabortion,
                    highrisk:data.data.highrisk,
                    highriskfactor:data.data.highriskfactor,
                    householdregister:data.data.householdregister,
                    address_1:data.data.address_1,
                    district:data.data.district
                });
            }
            else {
                console.error(data.message)
            }
        }.bind(this));
    },
    render() {
        return (
            <div>
                <div className="userinfo_top">
                    <img src={this.state.headimgurl}/>
                </div>
                <form action="" method="post" encType="multipart/form-data" id="register_form">
                    <div className="userinfo_title" style={{marginLeft:"2.25rem"}}>宝妈资料</div>
                    <div className="userinfo_content" style={{marginLeft:"2.25rem",marginRight:"2rem"}}>
                        <table>
                            <tbody>
                            <tr>
                                <td style="width: 35%;">真实姓名：</td>
                                <td>
                                    <input type="text" className="formcontroller" value={this.state.realname}
                                           onChange={this.handleChange}
                                           name="realname"/>
                                </td>
                            </tr>
                            <tr>
                                <td>手机号码：</td>
                                <td>
                                    <input type="text" className="formcontroller" name="telephone"
                                           onChange={this.handleChange}
                                           value={this.state.telephone}/>
                                </td>
                            </tr>
                            <tr>
                                <td>条形码：</td>
                                <td>
                                    <input type="text" className="formcontroller" name="barcode"
                                           onChange={this.handleChange}
                                           value={this.state.barcode}/>
                                </td>
                            </tr>
                            <tr>
                                <td>出生日期：</td>
                                <td>
                                    <input type="date" className="formcontroller" name="birthday"
                                           onChange={this.handleChange}
                                           value={this.state.birthday}/>
                                </td>
                            </tr>
                            <tr>
                                <td>保健科室：</td>
                                <td>
                                    <input id="department" className="formcontroller" type="text" readOnly=""
                                           placeholder="选择科室" name="depname" value={this.state.depname}
                                           onChange={this.handleChange}/>
                                    <input id="departmentvalue" type="hidden" name="department"
                                           value={this.state.department} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>身高：</td>
                                <td>
                <span className="whitebtn" style={{width:"8.75rem"}}>
                    <input type="text" className="hiddenInput"
                           name="height"
                           value={this.state.height} onChange={this.handleChange}
                           id="input-height"/>cm
                </span>
                                </td>
                            </tr>
                            <tr>
                                <td>体重：</td>
                                <td>
                                    <span className="whitebtn" style={{width:"8.75rem"}}>
                                        <input type="text"
                                               className="hiddenInput"
                                               name="weight"
                                               value={this.state.weight} onChange={this.handleChange}
                                               id="input-weight"/>kg
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>BMI指数：</td>
                                <td>
                                    <span style={{fontSize:"1.75rem",marginLeft:"1rem"}} id="input-bmiindex"></span>
                                </td>
                            </tr>
                            <tr>
                                <td>BMI类型：</td>
                                <td>
                                    <span style={{fontSize:"1.75rem",marginLeft:"1rem"}} id="input-bmitype"></span>
                                </td>
                            </tr>
                            <tr>
                                <td>末次月经时间：</td>
                                <td>
                                    <input type="date" className="formcontroller" name="lastmenstrualdate" onChange={this.handleChange}
                                           value={this.state.lastmenstrualdate}/>
                                </td>
                            </tr>
                            <tr>
                                <td>预产期：</td>
                                <td>
                                    <label style={{fontSize:"1.75rem",marginLeft:"1rem"}} name="edc"></label>
                                </td>
                            </tr>
                            <tr>
                                <td>孕次：</td>
                                <td>
                                    <input type="number" className="formcontroller" name="gravidity" onChange={this.handleChange}
                                           value={this.state.gravidity}/>
                                </td>
                            </tr>
                            <tr>
                                <td>产次：</td>
                                <td>
                                    <input type="number" className="formcontroller" name="parity" onChange={this.handleChange}
                                           value={this.state.parity}/>
                                </td>
                            </tr>
                            <tr>
                                <td>分娩次数：</td>
                                <td>
                                    <input type="number" className="formcontroller" name="vaginaldelivery" onChange={this.handleChange}
                                           value={this.state.vaginaldelivery}/>
                                </td>
                            </tr>
                            <tr>
                                <td>剖宫产次数：</td>
                                <td>
                                    <input type="number" className="formcontroller" name="aesarean" onChange={this.handleChange}
                                           value={this.state.aesarean}/>
                                </td>
                            </tr>
                            <tr>
                                <td>自然流产次数：</td>
                                <td>
                                    <input type="number" className="formcontroller" name="spontaneousabortion" onChange={this.handleChange}
                                           value={this.state.spontaneousabortion}/>
                                </td>
                            </tr>
                            <tr>
                                <td>人工流产次数：</td>
                                <td>
                                    <input type="number" className="formcontroller" name="drug_inducedabortion" onChange={this.handleChange}
                                           value={this.state.drug_inducedabortion}/>
                                </td>
                            </tr>
                            <tr>
                                <td>是否高危：</td>
                                <td>
                                    <span className="whitebtn active" name="isrisk" id="risk"
                                          style={{marginRight:"4rem"}}>是</span>
                                    <span className="whitebtn" name="isrisk" id="norisk">否</span>
                                    <input type="hidden" name="highrisk" id="highrisk" value={this.state.highrisk} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>高危因素：</td>
                                <td >
                                    <input type="text" className="formcontroller" id="dangerousreason"
                                           name="highriskfactor"
                                           value={this.state.highriskfactor} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td >是否为本市户口户籍：</td>
                                <td>
                                    <span className="whitebtn active" id="native" name="household"
                                          onClick={this.handleHousehold}
                                          style={{marginRight:"4rem"}}>是</span>
                                    <span className="whitebtn" name="household" id="nonative"
                                          onClick={this.handleHousehold}
                                          style={{marginLeft:"2rem"}}>否</span>
                                    <input type="hidden" name="householdregister" id="householdregister"
                                           value={this.state.householdregister} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>居住地区：</td>
                                <td>
                                    <input id="address" name="district" className="formcontroller" type="text"
                                           readonly="" placeholder="选择区域" value={this.state.district} onChange={this.handleChange}/>
                                    <input id="addressvalue" type="hidden"/>
                                </td>
                            </tr>
                            <tr>
                                <td>家庭详细住址：</td>
                                <td>
                                    <input type="text" className="formcontroller" name="address_1"
                                           value={this.state.address_1} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="register_outer" style={{textAlign:"center"}}>
                        <span className="whitebtn active" style={{margin:"3rem"}} id="register_submitbtn" onClick={this.handleRegister}>提交</span>
                    </div>
                </form>
            </div>
        )
    }
})
