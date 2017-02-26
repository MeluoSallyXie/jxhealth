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
    render: function () {
        new Swiper('.swiper-container', {
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 400,
            autoplay: 1000,
            autoplayDisableOnInteraction: false,
        });
        return (
            <div id="header">
                <div className="swiper-container">
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
