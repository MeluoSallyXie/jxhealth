/**
 * Created by sally on 2017/2/22.
 */
import React from 'react'
import { Link } from 'react-router'
import BlogItem from '../components/BlogItem'
import BottomFooter from '../components/BottomFooter'
let jsonp = require('../lib/jsonp');

export default React.createClass({
    getInitialState: function () {
        return {
            presses: null
        };
    },
    componentDidMount: function () {
        var postData = null;
        jsonp("/faq/documents", postData, "POST", function (data) {
            if (data.code == 0) {
                this.setState({
                    presses: data.data.documents
                });
            }
            else {
                alert(data.message)
            }
        });
    },
    render: function () {
        /*var data = {
            presses: [
                {id: 1, title: "测试", action: "/pressall/1", thumb: ""},
                {id: 2, title: "测试", action: "/pressall/1", thumb: ""},
                {id: 3, title: "测试", action: "/pressall/1", thumb: ""}
            ]
        };*/
        var bloglist = data.state.presses.map(function (press) {
            return (
                <BlogItem key={press.faq_id} title={press.title} action={"/pressall/"+press.faq_id}/>
            );
        });
        return (
            <div>
                <div className="bloglist">
                    {bloglist}
                </div>
                <BottomFooter />
            </div>
        );
    }
})
