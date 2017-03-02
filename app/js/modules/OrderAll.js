/**
 * Created by sally on 2017/2/14.
 */
import React from 'react'
import { Link } from 'react-router'
import BottomFooter from '../components/BottomFooter'
import OrderItem from '../components/OrderItem'
import OrderNone from '../components/OrderNone'
let jsonp = require('../lib/jsonp');

export default React.createClass({
    getInitialState: function () {
        return {
            orderHTML: ""
        };
    },
    componentWillMount:function(){
        document.title = '所有订单';
    },
    componentDidMount: function () {
        var postData = null;
        jsonp("/wechat/ordercenter/getAllList", postData, "POST", function (data) {
            if (data.code == 0) {
                var orderlist;
                if(data.data.orders!=0){
                    orderlist= data.data.orders.map(function (order, index) {
                        return (
                            <Link to="/repos" key={index}>
                                <OrderItem type={order.order_status_id} order_id={order.products} shipping_city={order.shipping_city}
                                           shipping_address_1={order.shipping_address_1}
                                           shipping_date={order.shipping_date} totals={order.totals[2].text}
                                           products={order.products}service_tel={data.data.service_tel} />
                            </Link>
                        );
                    });
                    this.setState({
                        orderHTML: (
                            <div>
                                <div className="orderTitle">
                                    所有订单
                                </div>
                                {orderlist}
                                <BottomFooter nav="order"/>
                            </div>
                        )
                    });
                }
                else {
                    orderlist = (
                        <OrderNone />
                    );
                    this.setState({
                        orderHTML: orderlist
                    });
                }

            }
            else {
                console.error(data.message)
            }
        }.bind(this));
    },
    render: function () {
        var webHTML = (
            <div>
                {this.state.orderHTML}
            </div>
        );
        return webHTML;
    }
})
