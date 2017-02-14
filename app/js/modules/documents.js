/**
 * Created by sally on 2017/2/14.
 */
import React from 'react'
import { Link } from 'react-router'
import HomeNav from '../components/HomeNav'
import BottomFooter from '../components/BottomFooter'

export default React.createClass({
    render: function () {
        var data = {
            products: [
                {id: 1, thumb: "app/image/temp/productlist1.png", name: "产后开奶", price: 499, service_timer: 50},
                {id: 2, thumb: "app/image/temp/productlist1.png", name: "产后开奶", price: 499, service_timer: 50},
                {id: 3, thumb: "app/image/temp/productlist1.png", name: "产后开奶", price: 499, service_timer: 0}
            ]
        };
        var documentlist = data.products.map(function (product) {
            return (
                <ProductItem key={product.id} thumb={product.thumb} name={product.name} price={product.price}
                             service_timer={product.service_timer}/>
            );
        });
        return (
            <div className="productlist">
                {documentlist}
            </div>
        );
    }
})