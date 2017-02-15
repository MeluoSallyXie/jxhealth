/**
 * Created by sally on 2017/2/15.
 */
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render: function () {
        var data = {
            title:"标题",answer:"内容"
        };
        return (
            <div>
                <div className="document_title">
                    <label>{data.title}</label>
                </div>
                <div className="document_answer">
                    <p>{data.answer}</p>
                </div>
            </div>
        );
    }
})
