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
global.ImgUrl="http://test.jinxingjk.com/";