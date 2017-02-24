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
            documentlist: ""
        };
    },
    componentDidMount: function () {
        document.body.style.backgroundColor = "#eee";
        var postData = null;
        jsonp("/faq/documents", postData, "POST", function (ret) {
            var data = JSON.parse(ret);
            if (data.code == 0) {
                var documentlist = data.data.documents.map(function (document, index) {
                    return (
                        <Link to={"/documents/"+document.faq_id}><DocumentDetail key={index} title={document.title}
                                                                                 action={"/documents/"+document.faq_id}/></Link>
                    );
                });
                this.setState({
                    documentlist: documentlist
                });
            }
            else {
                console.error(data.message)
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

        return (
            <div>
                {this.state.documentlist}
            </div>
        );
    }
})
