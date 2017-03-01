/**
 * Created by sally on 2017/2/15.
 */
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    getInitialState: function () {
        return {
            "advisetext": ""
        }
    },
    handleChange:function(event){
        this.setState({
            "advisetext": event.target.value
        });
    },
    handleSubmit: function (event) {
        alert(this.state.advisetext);
        event.preventDefault();
        var postData = {"advisetext": this.state.advisetext};
        jsonp("/wechat/advise", postData, "POST", function (data) {
            if (data.code == 0) {
                alert("提交成功");
            }
            else {
                console.error(data.message)
            }
        }.bind(this));
    },
    render: function () {
        return (
            <form action="" method="post" className="form-horizontal">
                <div className="adviseTitle">投诉建议</div>
                <div className="adviseTel">客服电话：<a href="tel:4008001208">400-800-1208</a></div>
                <div className="adviseIllu">
                    说明：您有任何意见或者建议，可以公共平台提交意见，也可以直接拨打客服电话反映，我们的工作人员将在第一时间进行处理和回复。
                </div>
                <textarea className="adviseContent" name="advisetext" onChange={this.handleChange}></textarea>
                <div className="adviseBottom">
                    <input type="submit" className="bindBtn" onClick={this.handleSubmit} value="提交建议"/>
                </div>
            </form>
        );
    }
})