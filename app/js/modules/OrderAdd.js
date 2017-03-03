/**
 * Created by sally on 2017/3/3.
 */
import React from 'react'

export default React.createClass({
    getInitialState: function () {
        return {
            name: "",
            price: "",
            shipping_realname: "",
            telephone: "",
            shipping_city: "",
            shipping_address_1: "",
            shipping_date: "",
            service_tel: "",
            coupontype: "",
            discount: "",
            lastprice: "",
            order_status_id: ""
        }
    },
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    callpay: function (event) {
        event.preventDefault();
        if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            }
        }
        else {
            this.onBridgeReady();
        }
    },
    onBridgeReady: function () {
        WeixinJSBridge.invoke(
            'getBrandWCPayRequest', this.state.wxpay, function (res) {
                WeixinJSBridge.log(res.err_msg);
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                    this.updateOrder();
                } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
                    alert("返回");
                }
            }
        );
    },
    updateOrder:function(){
        var postData = {"order_id": this.props.params.id};
        jsonp("/wechat/orderStatusUpdate", postData, "POST", function (data) {
            if (data.code == 0) {
                this.context.router.push("/orderadd/"+this.props.params.id);
            }
            else {
                console.error(data.message)
            }
        }.bind(this));
    },
    componentDidMount: function () {
        var postData = {"order_id": this.props.params.id};
        jsonp("/wechat/orderDetail", postData, "POST", function (data) {
            if (data.code == 0) {
                this.setState({
                        name: data.data.store_name,
                        price: data.data.products[0].price,
                        shipping_realname: data.data.shipping_realname,
                        telephone: data.data.telephone,
                        shipping_city: data.data.shipping_city,
                        shipping_address_1: data.data.shipping_address_1,
                        shipping_date: data.data.shipping_date,
                        service_tel: data.data.service_tel,
                        coupontype: "",
                        discount: "",
                        lastprice: "",
                        order_status_id: data.data.order_status_id
                    });
            }
            else {
                console.error(data.message)
            }
        }.bind(this));
    },
    render() {
        return (
            <form id="order_form">
                <div className="order_title">
                    <table width="100%">
                        <tr>
                            <td style={{color:"#333"}}>{this.state.name}</td>
                            <td style={{textAlign:"right",color:"#fe8e19"}}><label
                                style={{marginRight: "1.5rem"}}>{this.state.price}</label></td>
                        </tr>
                    </table>
                </div>
                <div className="order_detail">
                    联系人<label name="realname">{this.state.shipping_realname}</label>
                </div>
                <div className="order_detail">
                    联系电话<label name="telephone">{this.state.telephone}</label>
                </div>
                <div className="order_detail">
                    地址<label
                    name="shipping_address_1">{this.state.shipping_city + this.state.shipping_address_1}</label>
                </div>
                <div className="order_detail">
                    日期<label name="shipping_date">{this.state.shipping_date}</label>
                </div>
                <div className="order_detail" style={{height: "20rem"}}>
                    温馨提示
                <span><p className="info1">1、请您仔细核对您的手机号，并保持电话畅通，服务顾问会在服务开始前与此号码沟通相关事宜。<br />
                    2、您有任何疑问，也可以随时拨打客服电话：<br />
                    <a href={"tel:" + this.state.service_tel}><label className="info2">{this.state.service_tel}</label></a>前来咨询
                </p></span>
                </div>
                <div class="order_title" style={{borderBottom: "none"}}>
                    <label>原价：</label><label style={{color: "#fe8e19"}}>￥{this.state.price}</label><br />

                    {(() => {
                        if (this.state.coupontype == "P") {
                            return (
                                <div>
                                    <label>折扣：</label><label
                                    style={{color:"#fe8e19"}}>{this.state.discount}%</label><br />
                                </div>
                            )
                        }
                        else if (this.state.coupontype == "F") {
                            return (
                                <div>
                                    <label>折扣：</label><label
                                    style={{color:"#fe8e19"}}>￥{this.state.discount}</label><br />
                                </div>
                            )
                        }
                        else {
                            return (
                                <div>
                                    <label>折扣：</label><label style={{color:"#fe8e19"}}>{this.state.discount}</label>
                                    <label>合计：</label><label style={{color:"#fe8e19"}}>￥{this.state.lastprice}</label>
                                </div>
                            )
                        }
                    })()}

                    {(() => {
                        if (this.state.order_status_id && this.state.order_status_id) {
                            return (
                                <div className="order_detail info1" onClick={this.callpay}>
                                    <span className="whitebtn active info2"
                                          id="PayProduct">下一步</span>
                                </div>
                            )
                        }
                    })()}

                </div>
            </form>
        )
    }
})
