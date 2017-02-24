/**
 * Created by sally on 2017/2/14.
 */
import React from 'react'
import ProductItem from '../components/ProductItem'
import BottomFooter from '../components/BottomFooter'

export default React.createClass({
    getInitialState: function () {
        return {
            productlist: ""
        };
    },
    componentDidMount: function () {
        var postData = {"category_id":20};
        jsonp("/product/category", postData, "POST", function (data) {
            if (data.code == 0) {
                var productlist = data.products.map(function (product) {
                    return (
                        <ProductItem key={product.id} thumb={product.thumb} name={product.name} price={product.price}
                                     service_timer={product.service_timer}/>
                    );
                });
                this.setState({
                    productlist: productlist
                });
            }
            else {
                console.error(data.message)
            }
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                <div className="productlist">
                    {this.state.productlist}
                </div>
                <BottomFooter />
            </div>
        );
    }
})
