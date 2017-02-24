/**
 * Created by sally on 2017/2/14.
 */
import React from 'react'
import { Link } from 'react-router'
import DocumentDetail from '../components/DocumentDetail'
let jsonp = require('../lib/jsonp');

export default React.createClass({
    getInitialState: function () {
        return {
            documents: null
        };
    },
    componentDidMount: function () {
        document.body.style.backgroundColor = "#eee";
        var postData = {"product_id": 50};
        jsonp("/faq/documents", postData, "POST", function (data) {
            alert(data.code);
            if (data.code == 0) {
                this.setState({
                    documents: data.data.documents
                });
            }
            else {
                alert(data.message)
            }
        }.bind(this));
    },
    componentWillUnmount: function () {
        document.body.style.backgroundColor = "white";
    },
    render: function () {
        /*var data = {
            documents: [
                {id: 1, title: "测试", action: "/documents/1"},
                {id: 2, title: "测试", action: "/documents/1"},
                {id: 3, title: "测试", action: "/documents/1"}
            ]
        };*/
        console.log(this.state.documents);
        var documentlist = this.state.documents.map(function (document) {
            return (
                <Link to={"/documents/"+document.faq_id}><DocumentDetail key={document.faq_id} title={document.title}
                                                           action={"/documents/"+document.faq_id}/></Link>
            );
        });
        return (
            <div>
                {documentlist}
            </div>
        );
    }
})
