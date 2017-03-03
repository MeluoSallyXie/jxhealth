/**
 * Created by sally on 2017/3/3.
 */
import React from 'react'
require('../../css/LArea.css');
require('../lib/LArea');
let jsonp = require('../lib/jsonp');

export default React.createClass({
    getInitialState: function () {
        return {
            name: "",
            price: "",
            realname: "",
            telephone: "",
            city: "",
            address_1: "",
            service_tel: ""
        }
    },
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    handleSubmit: function () {
        if (document.getElementsByName("realname")[0].value.trim().length == 0) {
            alert("姓名不能为空");
        } else if (document.getElementsByName("telephone")[0].value.trim().length < 1 || document.getElementsByName("telephone")[0].trim().length > 11) {
            alert("电话格式不正确");
        } else if (document.getElementById("addressvalue").value.trim().length == 0) {
            alert("区域不能为空");
        } else if (document.getElementsByName("shipping_address_1")[0].value.trim().length == 0) {
            alert("详细地址不能为空");
        } else if (document.getElementsByName("shipping_date")[0].trim().length == 0) {
            alert("日期不能为空");
        } else {
            alert("验证通过");
        }
    },
    componentDidMount: function () {
        var postData = null;
        jsonp("/wechat/wechatbinding/getAddress", postData, "POST", function (data) {
            if (data.code == 0) {

            }
            else {
                console.error(data.message)
            }
        }.bind(this));
    },
    render() {
        return (
            <form id="order_form">
                <div className="order_title" style={{height:"13rem"}}>
                    <table width="100%">
                        <tbody>
                        <tr>
                            <td style={{color:"#333"}}>{this.state.name}</td>
                            <td rowSpan="2" style={{textAlign:"right"}}>
                                <div style={{marginRight:"3rem"}} hidden>
                                    <input type="button" value="-" className="order_plusbtn"/>
                                    <label id="productCount">1</label>
                                    <input type="hidden" name="productCount"/>
                                    <input type="button" value="+" className="order_plusbtn"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{color:"#fe8e19"}}><label>￥{this.state.price}&nbsp;&nbsp;</label></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="order_detail">
                    联系人<input type="text" name="realname" value={this.state.realname}/>
                </div>
                <div className="order_detail">
                    联系电话<input type="text" name="telephone" value={this.state.telephone}/>
                </div>

                <table className="order_detail" width="98%">
                    <tbody>
                    <tr>
                        <td width="15%">
                            地址
                        </td>
                        <td width="30%">
                            <input id="address" name="address" type="text" width="100%" readOnly="" placeholder="选择区域"
                                   value={this.state.city}/>
                            <input id="addressvalue" type="hidden" value={this.state.city}/>
                        </td>
                        <td>
                            <input type="text" name="shipping_address_1" width="100%" placeholder="详细地址"
                                   value={this.state.address_1}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="order_detail">
                    日期<input type="date" name="shipping_date"/>
                </div>
                <table className="order_detail" width="98%">
                    <tbody>
                    <tr>
                        <td width="15%">
                            折扣券
                        </td>
                        <td width="60%">
                            <input type="text" name="couponcode" id="couponcode"/>
                        </td>
                        <td>
                            <span className="whitebtn active info3"
                                  id="useVoucher">使用</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="order_detail" style={{height: "22rem"}}>
                    温馨提示
    <span><p className="info1">1、请您仔细核对您的手机号，并保持电话畅通，服务顾问会在服务开始前与此号码沟通相关事宜。<br />
        2、您有任何疑问，也可以随时拨打客服电话：<br />
        <a href={"tel:"+this.state.service_tel}><label className="info2">{this.state.service_tel}</label></a>前来咨询
    </p></span>
                </div>
                <div className="order_title" style={{borderBottom:"none"}}>
                    <label>合计：</label><label style={{color:"#fe8e19"}}>￥<label
                    id="countPrice">{this.state.price}</label></label>

                </div>
                <div className="footerblock"></div>
                <footer className="productfooter_mobile productv2_footwrap" id="orderpay_submitbtn"
                        onClick={this.handleSubmit}>
                    <div className="product_foot info1">
                        <label className="info2">支付</label>
                    </div>
                </footer>
            </form>
        )
    }
})
