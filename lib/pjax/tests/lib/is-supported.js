// build time:Sun Apr 05 2020 01:59:54 GMT+0800 (GMT+08:00)
var tape=require("tape");var isSupported=require("../../lib/is-supported.js");tape("test isSupported method",function(e){e.true(isSupported(),"well, we run test on supported browser, so it should be ok here");e.end()});
//rebuild by neat 