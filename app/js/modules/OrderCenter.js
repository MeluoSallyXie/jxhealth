/**
 * Created by sally on 2017/2/14.
 */
import React from 'react'
import { Link } from 'react-router'
import DocumentDetail from '../components/DocumentDetail'
let jsonp = require('../lib/jsonp');

export default React.createClass({
    getInitialState: function () {
        return {
            service_tel: ""
        };
    },
    componentDidMount: function () {
        document.body.style.backgroundColor = "#eee";
        var postData = null;
        jsonp("/wechat/ordercenter", postData, "POST", function (data) {
            if (data.code == 0) {
                this.setState({
                    service_tel: data.data.service_tel
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
        var data = [{"title": "全部订单", "action": ""}, {"title": "待支付", "action": ""}, {
            "title": "已支付未完成",
            "action": ""
        }, {"title": "已完成订单", "action": ""}];
        var list = data.map(function (data, index) {
            return (
                <Link to={data.action} key={index}><DocumentDetail title={data.title}
                                                                   action={data.action}/></Link>
            );
        });
        return (
            <div>
                <div className="orderTitle">
                    <table>
                        <tbody>
                        <tr>
                            <td className="left">订单中心</td>
                            <td>
                                <span className="adviseTel">客服电话：<a
                                    href={"tel:"+this.state.service_tel}>{this.state.service_tel}</a></span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {list}
            </div>
        );
    }
})
