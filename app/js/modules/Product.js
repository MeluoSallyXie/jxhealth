/**
 * Created by sally on 2017/2/26.
 */
import React from 'react'
let jsonp = require('../lib/jsonp');

export default React.createClass({
    getInitialState: function () {
        return {
            heading_title: "",
            price: "",
            service_timer: "",
            applicable_user: "",
            description: "",
            service_notes: "",
            service_tel: ""
        }
    },
    componentDidMount: function () {
        /*var postData = {"document_id": this.props.params.id};
         jsonp("/faq/document", postData, "POST", function (data) {
         if (data.code == 0) {
         this.setState({
         title: data.data.documents[0].title,
         answer: {__html: data.data.documents[0].answer},
         });
         }
         else {
         console.error(data.message)
         }
         }.bind(this));*/
    }
    ,
    render: function () {
        return (
            <div>
                <div className="product_divdetail">
                    <table width="100%">
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
                                                    <img src="image/catalog/newstyle/clock.png"/>
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
                    </table>
                </div>
                <div className="product_separater">
                </div>
                <div className="product_targetuser">
                    <label>适用人群：</label><label>{this.state.applicable_user}</label>
                </div>
                <div className="product_separater divMargin">
                </div>
                <div className="product_desc">
                    <label>服务介绍：</label>
                    <p>{this.state.description}</p>
                </div>
                <div className="product_separater divMargin1">
                </div>
                <div className="product_desc2">
                    <label>服务须知：</label>
                    <p>
                        {this.state.service_notes}
                    </p>
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
