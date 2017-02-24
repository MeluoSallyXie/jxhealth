/**
 * Created by sally on 2017/2/14.
 */
String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.replaceBar=function(){
    return this.replace(/[\'\"\\\b\f\n\r\t]/g, '');
}
global.ImgUrl="http://test.jinxingjk.com/";