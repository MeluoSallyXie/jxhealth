/**
 * Created by sally on 2017/2/14.
 */
import React from 'react'
import { Link } from 'react-router'
import Document from '../components/Document'

export default React.createClass({
    componentDidMount:function() {
        document.body.style.backgroundColor="#eee";
    },
    componentWillUnmount:function() {
        document.body.style.backgroundColor="white";
    },
    render: function () {
        var data = {
            documents: [
                {id: 1, title:"测试"},
                {id: 2, title:"测试"},
                {id: 3, title:"测试"}
            ]
        };
        var documentlist = data.documents.map(function (document) {
            return (
                <Document key={document.id} title={document.title} />
            );
        });
        return (
            <div>
                {documentlist}
            </div>
        );
    }
})
