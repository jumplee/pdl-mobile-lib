(function (factory) {
if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module depending on jQuery.
    define(factory);
} else {
    // No AMD. Register plugin with global jQuery object.
    factory();
}
}(function () {
var Vali={};
window.Vali=Vali;
Vali.isDatetime=function(str){
return/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(str);
}
Vali.isDate=function(str){
		// var reg = new RegExp("^(?:(?!0000)[0-9]{4}([-/.]?)(?:(?:0?[1-9]|1[0-2])([-/.]?)(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])([-/.]?)(?:29|30)|(?:0?[13578]|1[02])([-/.]?)31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-/.]?)0?2([-/.]?)29)$");
			// return reg.test(str);
			return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(str)&&!/Invalid|NaN/.test(new Date(str));
}
Vali.isTime=function(str){
		var reg = new RegExp("^([0-1]\\d|2[0-3]):[0-5]\\d:[0-5]\\d$");
		return reg.test(str);
}
Vali.isInt=function(str){
	var reg = new RegExp("^-?\\d+$");
		return reg.test( str);
}
Vali.isPlusInt=function(str){
	var reg = new RegExp("^\\d+$");
		return reg.test( str);
}
//length 小数点后几位
Vali.isMoney=function(str,length){
if(typeof length=='undefined'){var length=2;}
	var reg = new RegExp("^-?\\d+(\\.\\d{1,"+length+"})?$");
		return reg.test( str);
}
Vali.isPlusMoney=function(str,length){
if(typeof length=='undefined'){var length=2;}
	var reg = new RegExp("^(\\d+)(\\.\\d{1,"+length+"})?$");
		return reg.test( str);
}
Vali.isMobile=function(str){
return /^1[3|4|5|8|9][0-9]\d{8}$/.test(str);
}
Vali.isTelephone=function(str){
	return /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/.test(str);
}


}));


