/**
 * Created by sally on 2017/2/22.
 */
import React from 'react'
import BottomFooter from '../components/BottomFooter'

export default React.createClass({
    getInitialState: function () {
        return {
            title: "",
            description:{__html:""}
        };
    },
    componentWillMount:function(){
        document.title = '权威文章';
    },
    componentDidMount: function () {
        var postData = {"press_id": this.props.params.id};
        jsonp("/press/press", postData, "POST", function (data) {
            if (data.code == 0) {
                this.setState({
                    title: data.data.title,
                    description: {__html:data.data.description},
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
                    <div dangerouslySetInnerHTML={this.state.description}>
                    </div>
                </div>
                <BottomFooter nav="blog" />
            </div>
        );
    }
})



