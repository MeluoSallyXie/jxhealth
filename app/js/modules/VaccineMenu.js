/**
 * Created by sally on 2017/2/24.
 */
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render: function () {
        return (
            <div>
                <div classClass="vaccineMenu vaccineMenu1">
                    <Link to="/vaccinefree">
                        一级疫苗
                        <p>（国家免费接种）</p>
                    </Link>
                </div>
                <div classClass="vaccineMenu vaccineMenu2">
                    <Link to="/vaccinefree">
                        二级疫苗
                        <p>（个人自费接种）</p>
                    </Link>
                </div>
            </div>
        );
    }
})
