function getParam(name) {
    if(typeof name==='undefined'){
        name='record_id';
    }
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var newSearch=window.location.search.substr(1).replace(/\?/ig,'&');
    var r = newSearch.match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}