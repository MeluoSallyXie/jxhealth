/**
 * Created by sally on 2017/2/15.
 */
/**
 * Created by sally on 2017/2/14.
 */
import React from 'react'
import { Link } from 'react-router'
import DocumentDetail from '../components/DocumentDetail'

export default React.createClass({
    componentWillMount:function(){
        document.title = '个人信息';
    },
    componentDidMount: function () {
        document.body.style.backgroundColor = "#eee";
    },
    componentWillUnmount: function () {
        document.body.style.backgroundColor = "white";
    },
    render: function () {
        var data = {
            info: [
                {title: "基本信息", action: "/baseinfo"},
                {title: "产检计划", action: "/checklist"},
                {title: "疫苗接种表", action: "/vaccinemenu"}
            ]
        };
        var personalinfo = data.info.map(function (info, index) {
            return (
                <Link key={index} to={info.action}><DocumentDetail title={info.title} action={info.action}/></Link>
            );
        });
        return (
            <div>
                {personalinfo}
            </div>
        );
    }
})

