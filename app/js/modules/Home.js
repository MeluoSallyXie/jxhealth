/**
 * Created by sally on 2017/2/11.
 */
import React from 'react'
import { Link } from 'react-router'
import HomeNav from '../components/HomeNav'
import BottomFooter from '../components/BottomFooter'
import Header from '../components/Header'
let jsonp = require('../lib/jsonp');
require('../lib/util');

export default React.createClass({
    getInitialState: function () {
        return {
            imgUrls: []
        };
    },
    componentWillMount: function () {
        document.title = '金杏健康';
    },
    componentDidMount: function () {
        var code = "";
        if (typeof(this.props.location.query.code) == "string") {
            code = this.props.location.query.code;
        }
        var postData = {"code": code};
        console.log("postData" + JSON.stringify(postData));
        jsonp("/common/homem", postData, "POST", function (data) {
            if (data.code == 0) {
                var imgArray = new Array();
                var bannerLen = data.data.banners.length;
                for (var i = 0; i < bannerLen; i++) {
                    var bannerObj = data.data.banners[i];
                    console.log("imgurl"+global.ImgUrl + bannerObj.image);
                    imgArray.push({"url": global.ImgUrl + bannerObj.image});
                }
                this.setState({imgUrls: imgArray});
            }
            else {
                errorMsg(data);
            }
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                <Header imgUrls={this.state.imgUrls}/>
                <Link to="/productcategory/20">
                    <HomeNav description="泌乳调理" srcimg="app/image/homenavimg1.png" className="homenav nav1" state="0"/>
                </Link>
                <HomeNav description="产后恢复" srcimg="app/image/homenavimg2.png" className="homenav nav2" state="1"/>
                <HomeNav description="营养膳食" srcimg="app/image/homenavimg3.png" className="homenav nav3" state="1"/>
                <BottomFooter nav="home"/>
            </div>
        );
    }
})
