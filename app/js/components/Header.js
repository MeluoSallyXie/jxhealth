/**
 * Created by sally on 2017/2/25.
 */
'use strict';
import React from 'react'
import { render } from 'react-dom'
require('../../css/swiper.min.css');
let Swiper = require('../lib/swiper.min.js');

var Header = React.createClass({
    getInitialState: function () {
        return {
            imgUrls: [
                {url: "http://test.jinxingjk.com/jxhealth/app/image/homenav1.png"},
                {url: "http://test.jinxingjk.com/jxhealth/app/image/homenav2.png"}
            ]
        };
    },
    componentDidMount: function () {
        var postData = null;
        jsonp("/common/homem", postData, "POST", function (data) {
            if (data.code == 0) {
                var imgArray=null;
                var bannerLen=data.data.banners.length;
                for(var i=0;i<bannerLen;i++){
                    var bannerObj=data.data.banners[i];
                    imgArray.push({url:bannerObj.image});
                }
                this.setState({imgUrls:imgArray});
                new Swiper('#header .swiper-container', {
                    loop: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    speed: 1000,
                    autoplay: 1000,
                    autoplayDisableOnInteraction: false
                });
            }
            else {
                console.error(data.message)
            }
        }.bind(this));
    },
    render: function () {
        return (
            <div id="header">
                <div className="swiper-container flexslider">
                    <div className="swiper-wrapper">
                        {
                            this.state.imgUrls.map(function (img,index) {
                                return (
                                    <div className="swiper-slide" key={"header" + index}>
                                        <img className="img" src={img.url}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        );
    }
});
module.exports = Header;
