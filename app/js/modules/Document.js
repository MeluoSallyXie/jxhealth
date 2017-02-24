/**
 * Created by sally on 2017/2/15.
 */
import React from 'react'
import { Link } from 'react-router'
let jsonp = require('../lib/jsonp');

export default React.createClass({
    getInitialState: function () {
        return {
            title: "",
            answer:""
        };
    },
    componentDidMount: function () {
        var postData = {"document_id": this.props.params.id};
        jsonp("/faq/document", postData, "POST", function (ret) {
            var data= eval("(" + ret + ")");
            if (data.code == 0) {
                this.setState({
                    title: data.documents[0].title,
                    answer: data.documents[0].answer,
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
                <div className="document_title">
                    <label>{this.state.title}</label>
                </div>
                <div className="document_answer">
                    <p>{this.state.answer}</p>
                </div>
            </div>
        );
    }
})
