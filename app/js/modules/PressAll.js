/**
 * Created by sally on 2017/2/22.
 */
import React from 'react'
import { Link } from 'react-router'
import BlogItem from '../components/BlogItem'
import BottomFooter from '../components/BottomFooter'
let jsonp = require('../lib/jsonp');
require("../lib/util");

export default React.createClass({
    getInitialState: function () {
        return {
            bloglist: ""
        };
    },
    componentWillMount:function(){
        document.title = '权威文章';
    },
    componentDidMount: function () {
        var postData = null;
        jsonp("/press/all", postData, "POST", function (data) {
            if (data.code == 0) {
                var bloglist = data.data.presses.map(function (press) {
                    return (
                        <BlogItem key={press.press_id} title={press.title} action={"/pressall/"+press.press_id}
                                  thumb={global.ImgUrl+press.thumb}/>
                    );
                });
                this.setState({
                    bloglist: bloglist
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
                <div className="bloglist">
                    {this.state.bloglist}
                </div>
                <BottomFooter nav="blog" />
            </div>
        );
    }
})
