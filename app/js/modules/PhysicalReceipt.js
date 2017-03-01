/**
 * Created by sally on 2017/2/15.
 */
import React from 'react'
import { Link,History } from 'react-router'

export default React.createClass({
    getInitialState: function () {
        return {
            "advisetext": ""
        }
    },
    handleSubmit: function (event) {
        event.preventDefault();
        alert("test");
    },
    render: function () {
        return (
            <form method="post" enctype="multipart/form-data" className="form-horizontal" id="register_form">
                <div>
                    <div>
                        <div className="back_div">
                            <table width="100%">
                                <tbody>
                                <tr>
                                    <td>
                                        <label>心脏病</label>
                                    </td>
                                    <td align="right">
                                        <input className="mui-switch mui-switch-animbg" type="checkbox" name="switch[]" value="heart" id="heart" data-num="1" />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div id="div1" className="back_divcontent">
                                <table width="100%">
                                    <tbody>
                                    <tr>
                                        <td width="10%">
                                            <input type="checkbox" name="heartdisease[]" value="心率失常" />
                                        </td>
                                        <td width="22%" className="checktd">
                                            <label >心率失常</label>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <input type="checkbox" name="heartdisease[]" value="心功能异常" />
                                        </td>
                                        <td className="checktd">
                                            <label>心功能异常</label>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <input type="checkbox" name="heartdisease[]" id="xzbcheck" value="其它" />
                                        </td>
                                        <td className="checktd">
                                            <label>其它</label>
                                        </td>
                                        <td>
                                            <input type="text" className="formcontroller"  name="xzb" width="90%" />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="back_seperator"></div>
                        <div className="back_div">
                            <table width="100%">
                                <tbody>
                                <tr>
                                    <td>
                                        <label>高血压</label>
                                    </td>
                                    <td align="right">
                                        <input className="mui-switch mui-switch-animbg" type="checkbox" name="switch[]" value="hyper" id="hyper" data-num="2" />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div id="div2" className="back_divcontent">
                                <table width="100%">
                                    <tbody>
                                    <tr>
                                        <td width="20%">
                                            <label>血压数值</label>
                                        </td>
                                        <td width="60%">
                                            <input type="text" name="gxy" className="formcontroller" />
                                        </td>
                                        <td className="checktd">
                                            <label>&nbsp;mmHg</label>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="back_seperator"></div>
                        <div className="back_div">
                            <table width="100%">
                                <tbody>
                                <tr>
                                    <td>
                                        <label>糖尿病</label>
                                    </td>
                                    <td align="right">
                                        <input className="mui-switch mui-switch-animbg" type="checkbox" name="switch[]" value="GI" id="GI" data-num="3" />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div id="div3" className="back_divcontent">
                                <table width="100%">
                                    <tbody>
                                    <tr>
                                        <td width="10%">
                                            <input type="radio" name="cure" value="未使用任何药物" checked />
                                        </td>
                                        <td width="40%" className="checktd">
                                            <label>未使用任何药物</label>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <input type="radio" name="cure" value="口服血糖药物" />
                                        </td>
                                        <td className="checktd">
                                            <label>口服血糖药物后</label>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <input type="radio" name="cure" value="使用胰岛素药物" />
                                        </td>
                                        <td className="checktd">
                                            <label>使用胰岛素药物后</label>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table width="100%">
                                    <tbody>
                                    <tr>
                                        <td width="37%">
                                            <label>饭后2小时血糖值</label>
                                        </td>
                                        <td>
                                            <input type="text"  name="tnb" className="formcontroller" width="90%"/>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="back_seperator"></div>
                        <div className="back_div">
                            <table width="100%">
                                <tbody>
                                <tr>
                                    <td>
                                        <label>肾病</label>
                                    </td>
                                    <td align="right">
                                        <input className="mui-switch mui-switch-animbg" type="checkbox" name="switch[]" value="neph" id="neph" data-num="4" />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div id="div4" className="back_divcontent">
                                <table width="100%">
                                    <tbody>
                                    <tr>
                                        <td width="10%">
                                            <input type="checkbox" name="nephropathy[]" value="肾炎" />
                                        </td>
                                        <td className="checktd">
                                            <label>肾炎</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <input type="checkbox" name="nephropathy[]" value="肾炎伴肾功能损害" />
                                        </td>
                                        <td className="checktd">
                                            <label>肾炎伴肾功能损害</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <input type="checkbox" name="nephropathy[]" value="肾炎伴高血压，蛋白尿，肾功能不全" />
                                        </td>
                                        <td className="checktd">
                                            <label>肾炎伴高血压，蛋白尿，肾功能不全</label>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="back_seperator"></div>
                        <div className="back_div">
                            <table width="100%">
                                <tbody>
                                <tr>
                                    <td>
                                        <label>肝病</label>
                                    </td>
                                    <td align="right">
                                        <input className="mui-switch mui-switch-animbg" type="checkbox" name="switch[]" value="hepa" id="hepa" data-num="5" />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div id="div5" className="back_divcontent">
                                <table width="100%">
                                    <tbody>
                                    <tr>
                                        <td width="10%">
                                            <input type="checkbox" name="hepatopathy[]" value="慢性肝炎病毒携带者" />
                                        </td>
                                        <td className="checktd">
                                            <label>慢性肝炎病毒携带者</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <input type="checkbox" name="hepatopathy[]" value="肝硬化" />
                                        </td>
                                        <td className="checktd">
                                            <label>肝硬化</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <input type="checkbox" name="hepatopathy[]" value="脂肪肝" />
                                        </td>
                                        <td className="checktd">
                                            <label>脂肪肝</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <input type="checkbox" name="hepatopathy[]" value="肝内胆汁淤积症" />
                                        </td>
                                        <td className="checktd">
                                            <label>肝内胆汁淤积症</label>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table width="100%">
                                    <tbody>
                                    <tr>
                                        <td width="35%">
                                            <label>谷丙转氨酶(ALT)</label>
                                        </td>
                                        <td width="15%">
                                            <input type="text"  name="alt" className="formcontroller inputWidth4" />
                                        </td>
                                        <td width="35%">
                                            <label>谷草转氨酶(AST)</label>
                                        </td>
                                        <td>
                                            <input type="text" name="ast" className="formcontroller inputWidth4" />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="back_seperator"></div>
                        <div className="back_div">
                            <table width="100%">
                                <tbody>
                                <tr>
                                    <td>
                                        <label>甲状腺功能异常</label>
                                    </td>
                                    <td align="right">
                                        <input className="mui-switch mui-switch-animbg" type="checkbox" name="switch[]" value="thy" id="thy" data-num="6" />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div id="div6" className="back_divcontent">
                                <table width="100%">
                                    <tbody>
                                    <tr>
                                        <td width="10%">
                                            <input type="checkbox" name="thyroid[]" value="甲亢" />
                                        </td>
                                        <td className="checktd">
                                            <label>甲亢</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <input type="checkbox" name="thyroid[]" value="甲减或低下" />
                                        </td>
                                        <td className="checktd">
                                            <label>甲减或低下</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <input type="checkbox" name="thyroid[]" value="甲状腺疾病" />
                                        </td>
                                        <td className="checktd">
                                            <label>甲状腺疾病</label>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="back_seperator"></div>
                        <div className="back_div">
                            <table width="100%">
                                <tbody>
                                <tr>
                                    <td>
                                        <label>血液疾病系统</label>
                                    </td>
                                    <td align="right">
                                        <input className="mui-switch mui-switch-animbg" type="checkbox" name="switch[]"  value="bloods" id="bloods" data-num="7" />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div id="div7" className="back_divcontent">
                                <table width="100%">
                                    <tbody>
                                    <tr>
                                        <td width="10%">
                                            <input type="checkbox" name="blood[]" value="贫血HGB数值" id="blood1" />
                                        </td>
                                        <td className="checktd">
                                            <label>贫血</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        </td>
                                        <td>
                                            <label>HGB血红蛋白：</label><input type="text"  name="hgb" className="formcontroller" width="60%" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <input type="checkbox" name="blood[]" value="血小板异常数值" id="blood2" />
                                        </td>
                                        <td className="checktd">
                                            <label>血小板异常</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        </td>
                                        <td>
                                            <label>血小板异常数值：</label><input type="text" name="xqb" className="formcontroller" width="50%" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <input type="checkbox" name="blood[]" value="再生障碍性贫血/白血病" />
                                        </td>
                                        <td className="checktd">
                                            <label>再生障碍性贫血/白血病</label>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="back_seperator"></div>
                        <div className="back_div">
                            <table width="100%">
                                <tbody>
                                <tr>
                                    <td>
                                        <label>其他</label>
                                    </td>
                                    <td align="right">
                                        <input className="mui-switch mui-switch-animbg" type="checkbox" name="switch[]"  value="otherelse" id="otherelse" data-num="8" />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div id="div8" className="back_divcontent">
                                <table width="100%">
                                    <tbody>
                                    <tr>
                                        <td width="10%">
                                            <input type="checkbox" name="others[]" value="精神疾病" />
                                        </td>
                                        <td width="30%" className="checktd">
                                            <label>精神疾病</label>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="10%">
                                            <input type="checkbox" name="others[]" value="血型不合" />
                                        </td>
                                        <td className="checktd">
                                            <label>血型不合</label>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="10%">
                                            <input type="checkbox" name="others[]" value="免疫系统疾病" />
                                        </td>
                                        <td className="checktd">
                                            <label>免疫系统疾病</label>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="10%">
                                            <input type="checkbox" name="others[]" value="结核" />
                                        </td>
                                        <td className="checktd">
                                            <label>结核</label>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="10%">
                                            <input type="checkbox" name="others[]" value="哮喘" />
                                        </td>
                                        <td className="checktd">
                                            <label>哮喘</label>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td width="10%">
                                            <input type="checkbox" name="others[]" value="肿瘤" />
                                        </td>
                                        <td className="checktd">
                                            <label>肿瘤</label>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
                                            <input type="checkbox" name="others[]" value="性病" />
                                        </td>
                                        <td className="checktd">
                                            <label>性病</label>
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table width="100%">
                                    <tbody>
                                    <tr>
                                        <td width="10%">
                                            <input type="checkbox" name="others[]" value="其它" id="other1" />
                                        </td>
                                        <td width="15%" className="checktd">
                                            <label>其它</label>
                                        </td>
                                        <td >
                                            <input type="text" name="other" className="formcontroller" width="90%" />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bindBottom">
                    <span className="whitebtn active physicalSubmitBtn" onclick="" id="register_submitbtn">确定</span>
                </div>
            </form>
        );
    }
})
