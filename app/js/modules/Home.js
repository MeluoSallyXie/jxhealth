/**
 * Created by sally on 2017/2/11.
 */
import React from 'react'
import HomeNav from '../components/HomeNav'

export default React.createClass({
    render() {
    return (
        <div>
            <HomeNav description="泌乳调理" />
            <HomeNav description="产后恢复" />
            <HomeNav description="营养膳食" />
        </div>
    );
}
})
