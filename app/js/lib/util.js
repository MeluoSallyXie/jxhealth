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
        case 1020:alert(data.message);
            location.href=data.data[0].url;
            break;
    }
}
global.ImgUrl="http://test.jinxingjk.com/";