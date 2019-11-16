function getParam(name) {
    if(typeof name==='undefined'){
        name='record_id';
    }
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var newSearch=window.location.search.substr(1).replace(/\?/ig,'&');
    var r = newSearch.match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}

function isWeChatBrowser(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}

window._pdl_mobile_lib_version='1.0.1'