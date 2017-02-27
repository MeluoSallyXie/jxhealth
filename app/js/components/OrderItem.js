/**
 * Created by sally on 2017/2/27.
 */
/**
 * Created by sally on 2017/2/15.
 */

var React = require('react');
var ReactDOM = require('react-dom');

var OrderItem = React.createClass({

    render: function () {
        var productList = this.props.products.map(function (product, index) {
            return (
                <span>{product.name}</span>
            )
        });
        var item;
        item = (
            <div>
                <div className="orderTitle">
                    所有订单
                </div>
                <div className="orderList">
                    <table className="maintable" data-num={this.props.order_id}>
                        <tr>
                            <td className="left">地址：</td>
                            <td colspan="2"
                                className="collRight">{this.props.shipping_city + this.props.shipping_address_1}</td>
                        </tr>
                        <tr>
                            <td>时间：</td>
                            <td>{this.props.shipping_date}</td>
                            <td className="listMoney thirdRight">
                                {this.props.totals}
                            </td>
                        </tr>
                        <tr>
                            <td>商品：</td>
                            <td>
                                {productList}
                            </td>
                            <td className="thirdRight">
                                <span className="listPaybtn" data-num={this.props.order_id}>去支付</span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );

        return item;
    }
});
module.exports = OrderItem;
