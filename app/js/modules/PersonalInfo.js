/**
 * Created by sally on 2017/2/15.
 */
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
            info: [
                {id: 1, title:"基本信息",action:"/repos"},
                {id: 2, title:"产检计划",action:"/repos"},
                {id: 3, title:"疫苗接种表",action:"/repos"}
            ]
        };
        var personalinfo = data.info.map(function (info) {
            return (
                <Document key={info.id} title={info.title} action={info.action} />
            );
        });
        return (
            <div>
                {personalinfo}
            </div>
        );
    }
})

