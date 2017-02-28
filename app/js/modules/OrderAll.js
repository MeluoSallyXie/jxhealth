/**
 * Created by sally on 2017/2/27.
 */
/**
 * Created by sally on 2017/2/14.
 */
import React from 'react'
import { Link } from 'react-router'
import OrderItem from '../components/OrderItem'
let jsonp = require('../lib/jsonp');

export default React.createClass({
    getInitialState: function () {
        return {
            orderlist: ""
        };
    },
    componentDidMount: function () {
        document.body.style.backgroundColor = "#eee";
        var postData = null;
        jsonp("/wechat/ordercenter/getPendingList", postData, "POST", function (data) {
            if (data.code == 0) {
                var orderlist = data.data.order.map(function (order, index) {
                    return (
                        <div>
                            <div className="orderTitle">
                                所有订单
                            </div>
                            <Link to="/repos" key={index}>
                                <OrderItem order_id={order.products} shipping_city={order.shipping_city}
                                           shipping_address_1={order.shipping_address_1}
                                           shipping_date={order.shipping_date} totals={order.totals[2].text}
                                           products={order.products}/>
                            </Link>
                        </div>
                    );
                });
                this.setState({
                    orderlist: orderlist
                });
            }
            else {
                console.error(data.message)
            }
        }.bind(this));
    },
    componentWillUnmount: function () {
        document.body.style.backgroundColor = "white";
    },
    render: function () {
        return (
            <div>
                {this.state.orderlist}
            </div>
        );
    }
})