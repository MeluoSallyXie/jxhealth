/**
 * Created by sally on 2017/2/11.
 */
import React from 'react'
import { Link } from 'react-router'
import HomeNav from '../components/HomeNav'
import BottomFooter from '../components/BottomFooter'
import Header from '../components/Header'

export default React.createClass({
    render: function () {
        return (
            <div>
                <Header code=""  />
                <Link to="/productcategory/20">
                    <HomeNav description="泌乳调理" srcimg="app/image/homenavimg1.png" className="homenav nav1" state="0"/>
                </Link>
                <HomeNav description="产后恢复" srcimg="app/image/homenavimg2.png" className="homenav nav2" state="1"/>
                <HomeNav description="营养膳食" srcimg="app/image/homenavimg3.png" className="homenav nav3" state="1"/>
                <BottomFooter nav="home" />
            </div>
        );
    }
})
