/**
 * Created by sally on 2017/2/27.
 */
/**
 * Created by sally on 2017/2/15.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var OrderItem = React.createClass({
    contact:function(event){
        event.stopPropagation();
        location.href = "tel:"+this.props.service_tel;

    },
    render: function () {
        var productList = this.props.products.map(function (product, index) {
            return (
                <span key={index}>{product.name}</span>
            )
        });
        var item;
        switch (Number(this.props.type)) {
            case 1:
                item = (
                    <div className="orderList">
                        <table className="maintable" data-num={this.props.order_id}>
                            <tbody>
                            <tr>
                                <td className="left">地址：</td>
                                <td colSpan="2"
                                    className="collRight">{this.props.shipping_city + this.props.shipping_address_1}</td>
                            </tr>
                            <tr>
                                <td>时间：</td>
                                <td>{this.props.shipping_date}</td>
                                <td className="listMoney thirdRight">
                                    ￥{this.props.totals}
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
                            </tbody>
                        </table>
                    </div>
                );
                break;
            case 5:
            case 15:
                item = (
                    <div className="orderList">
                        <table className="maintable">
                            <tbody>
                            <tr>
                                <td className="left">地址：</td>
                                <td colSpan="2"
                                    className="collRight">{this.props.shipping_city + this.props.shipping_address_1}</td>
                            </tr>
                            <tr>
                                <td>时间：</td>
                                <td>{this.props.shipping_date}</td>
                                <td className="listMoney" style={{textAlign:"right"}}>￥{this.props.totals}</td>
                            </tr>
                            <tr>
                                <td>商品：</td>
                                <td>
                                    {productList}
                                </td>
                                <td style={{textAlign:"right"}}>
                                    <span className="listPaybtn" onClick={this.contact}>联系客服</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                );
                break;
        }

        return item;
    }
});
module.exports = OrderItem;
