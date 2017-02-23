/**
 * Created by sally on 2017/2/22.
 */
import React from 'react'
import BottomFooter from '../components/BottomFooter'

export default React.createClass({

    render: function () {
        var title="test";
        var description="test";
        return (
            <div>
                <div className="wechatpress_maindiv">
                    <span className="wechatpress_title">{title}</span>
                    <div>
                        {description}
                    </div>
                </div>
                <BottomFooter />
            </div>
        );
    }
})



