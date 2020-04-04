// build time:Sun Apr 05 2020 01:59:54 GMT+0800 (GMT+08:00)
var forEachEls=require("../foreach-els");module.exports=function(e,o,r,n){o=typeof o==="string"?o.split(" "):o;o.forEach(function(o){forEachEls(e,function(e){e.addEventListener(o,r,n)})})};
//rebuild by neat 