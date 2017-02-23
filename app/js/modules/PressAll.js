/**
 * Created by sally on 2017/2/22.
 */
import React from 'react'
import { Link } from 'react-router'
import BlogItem from '../components/BlogItem'
import BottomFooter from '../components/BottomFooter'

export default React.createClass({
    render: function () {
        var data = {
            presses: [
                {id: 1, title: "测试", action: "/pressall/1", thumb: ""},
                {id: 2, title: "测试", action: "/pressall/1", thumb: ""},
                {id: 3, title: "测试", action: "/pressall/1", thumb: ""}
            ]
        };
        var bloglist = data.presses.map(function (press) {
            return (
                <BlogItem key={press.id} title={press.title} action={press.action}/>
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
