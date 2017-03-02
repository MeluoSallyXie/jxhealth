/**
 * Created by sally on 2017/2/14.
 */
import React from 'react'
import { Link } from 'react-router'
import Binding from '../components/Binding'

export default React.createClass({
    componentWillMount:function(){
        document.title = '金杏健康';
    },
    render: function () {
        return (
            <div>
                <div className="orderTitle">绑定手机</div>
                <Binding />
            </div>
        );
    }
})
