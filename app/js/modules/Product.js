/**
 * Created by sally on 2017/2/26.
 */
import React from 'react'
import Header from '../components/Header'
let jsonp = require('../lib/jsonp');

export default React.createClass({
    getInitialState: function () {
        return {
            imgUrls: [],
            heading_title: "",
            price: "",
            service_timer: "",
            applicable_user: {__html: ""},
            description: {__html: ""},
            service_notes: {__html: ""},
            service_tel: ""
        }
    },
    componentDidMount: function () {
        var postData = {"product_id": this.props.params.id};
        jsonp("/product/product", postData, "POST", function (data) {
            if (data.code == 0) {
                var imgArray = new Array();
                var bannerLen = data.data.banners.length;
                for (var i = 0; i < bannerLen; i++) {
                    var bannerObj = data.data.banners[i];
                    imgArray.push({"url": global.ImgUrl+bannerObj.image});
                }
                this.setState({
                    imgUrls:imgArray,
                    heading_title: data.data.name,
                    price: data.data.price,
                    service_timer: data.data.service_timer,
                    applicable_user: {__html: data.data.applicable_user},
                    description: {__html: data.data.description},
                    service_notes: {__html: data.data.service_notes},
                    service_tel: data.data.service_tel
                });
            }
            else {
                console.error(data.message)
            }
        }.bind(this));
    }
    ,
    render: function () {
        return (
            <div>
                <Header imgUrls={this.state.imgUrls} />
                <div className="product_divdetail">
                    <table width="100%">
                        <tbody>
                        <tr>
                            <td>
                                <div>
                                    <label className="product_titile">{this.state.heading_title}</label>
                                </div>
                                <div className="priceDiv">
                                    <label className="product_price">￥{this.state.price}</label>
                                </div>
                            </td>
                            <td align="right">
                                {(() => {
                                    if (this.state.service_timer != 0) {
                                        return (
                                            <div width="100%">
                                                <div className="clockDiv">
                                                    <img src="app/image/clock.png"/>
                                                </div>
                                                <div className="timeOuter">
                                                    <label className="time">{this.state.service_timer}分钟</label>
                                                </div>
                                            </div>
                                        )
                                    }
                                })()}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="product_separater">
                </div>
                <div className="product_targetuser">
                    <label>适用人群：</label>
                    <label dangerouslySetInnerHTML={this.state.applicable_user}></label>
                </div>
                <div className="product_separater divMargin">
                </div>
                <div className="product_desc">
                    <label>服务介绍：</label>
                    <p dangerouslySetInnerHTML={this.state.description}></p>
                </div>
                <div className="product_separater divMargin1">
                </div>
                <div className="product_desc2">
                    <label>服务须知：</label>
                    <p dangerouslySetInnerHTML={this.state.service_notes}></p>
                </div>
                <div className="footerblock"></div>
                <footer className="productfooter_mobile productv2_footwrap">
                    <div className="product_foot">
                        <div className="left"><a href={"tel:"+this.state.service_tel}>电话预约</a></div>
                        <div className="row">
                        </div>
                        <div className="left">
                            <a href="#">下单支付</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
})
