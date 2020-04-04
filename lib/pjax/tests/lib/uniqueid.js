// build time:Sun Apr 05 2020 01:59:54 GMT+0800 (GMT+08:00)
var tape=require("tape");var uniqueid=require("../../lib/uniqueid.js");tape("test uniqueid",function(e){var u=uniqueid();var i=uniqueid();e.notEqual(u,i,"Two calls to uniqueid produce different values");e.end()});
//rebuild by neat 