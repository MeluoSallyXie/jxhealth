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
            imgUrls: []
        };
    },
    updateState: function (data) {
        this.setState({imgUrls: data});
    },
    componentDidMount: function () {
        console.info("Header componentDidMount");
        new Swiper('.swiper-container', {
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 1000,
            autoplay: 1000,
            autoplayDisableOnInteraction: false
        });

    },
    render: function () {
        return (
            <div id="header">
                <div className="swiper-container">
                    <div className="swiper-wrapper flexslider">
                        {
                            this.state.imgUrls.map(function (img, index) {
                                console.info("props.imgUrls.map");
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
