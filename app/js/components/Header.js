/**
 * Created by sally on 2017/2/25.
 */
'use strict';
import React from 'react'
import { render } from 'react-dom'
require('../css/swiper.min.css');
let Swiper = require('../lib/swiper.min.js');

var Header = React.createClass({
    getInitialState: function () {
        return {
            imgUrls: [
                {url: "http://opencart.meluo.net/image/catalog/%E4%B8%8A%E7%BA%BF%E5%9B%BE%E7%89%87(1).jpg"},
                {url: "http://opencart.meluo.net/image/catalog/%E4%B8%8A%E7%BA%BF%E5%9B%BE%E7%89%87(1).jpg"}
            ]
        };
    },
    render: function () {
        let countId = 0;
        new Swiper('#header .swiper-container', {
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 3000,
            autoplayDisableOnInteraction: false,
        })
        return (
            <div id="header">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.imgUrls.map((url) => {
                                return <div className="swiper-slide" key={"header" + countId++}>
                                    <img className="img" src={url}/>
                                </div>
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
