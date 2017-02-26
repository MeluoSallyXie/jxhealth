/**
 * Created by sally on 2017/2/26.
 */
import React from 'react'
let jsonp = require('../lib/jsonp');

export default React.createClass({
    getInitialState: function () {
        /*return {
            title: "",
            answer: {__html: ""}
        };*/
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
    },
    render: function () {
        return (
            <div>
               商品详情
            </div>
        );
    }
})
