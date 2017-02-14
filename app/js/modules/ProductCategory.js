/**
 * Created by sally on 2017/2/14.
 */
import React from 'react'
import ProductItem from '../components/ProductItem'

export default React.createClass({
    render() {
        return (
            <div className="productlist">
                <ProductItem thumb="app/image/temp/productlist1.png" name="产后开奶" price="499" />
            </div>
        );
    }
})
