/**
 * Created by sally on 2017/2/22.
 */
import React from 'react'
import BottomFooter from '../components/BottomFooter'

export default React.createClass({
    getInitialState: function () {
        return {
            title: "",
            description:""
        };
    },
    componentDidMount: function () {
        var postData = {"document_id": this.props.params.id};
        jsonp("/press/press", postData, "POST", function (ret) {
            var data= eval("(" + ret + ")");
            if (data.code == 0) {
                this.setState({
                    title: data.data.heading_title,
                    description: data.data.description,
                });
            }
            else {
                console.error(data.message)
            }
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                <div className="wechatpress_maindiv">
                    <span className="wechatpress_title">{this.state.title}</span>
                    <div>
                        {this.state.description}
                    </div>
                </div>
                <BottomFooter />
            </div>
        );
    }
})



