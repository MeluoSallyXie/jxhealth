/**
 * Created by sally on 2017/2/14.
 */
String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

window.hasClass=function(elem, cls){
    cls = cls || '';
    if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}

window.errorMsg=function(data){
    switch (data.code){
        case 1011:alert(data.message);
            location.href=data.data[0].url;
            break;
        case 1012:alert(data.message);
            location.href=data.data[0].url;
            break;
        case 1013:
            alert(data.message);
            //alert("您不是高危孕妇，不需要进行回访调查喔");
            wx.closeWindow();
            break;
        case 1014:
            alert(data.message);
            //alert("本次回访调查已成功提交！");
            wx.closeWindow();
            break;
        case 1015:
            alert(data.message);
            //alert("您未到下次回访时间，请耐心等待哦");
            wx.closeWindow();
            break;
        case 1016:
            alert(data.message);
            //alert("您的回访调查已结束！");
            wx.closeWindow();
            break;
        case 1020:alert(data.message);
            location.href=data.data[0].url;
            break;
    }
}
global.ImgUrl="http://test.jinxingjk.com/";