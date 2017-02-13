/**
 * Created by sally on 2017/2/11.
 */
import React from 'react'
import { Link } from 'react-router'
import HomeNav from '../components/HomeNav'

export default React.createClass({
    render() {
    return (
        <div>
            <Link to="/repos">
                 <HomeNav description="泌乳调理" srcimg="app/image/homenavimg1.png" className="homenav nav1" />
            </Link>
            <HomeNav description="产后恢复" srcimg="app/image/homenavimg2.png" className="homenav nav2" />
            <HomeNav description="营养膳食" srcimg="app/image/homenavimg3.png" className="homenav nav3" />
        </div>
    );
}
})
