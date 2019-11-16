/**
 * 动态加载js
 * 来源 https://github.com/xiongwilee/blog/issues/8
 * 使用文章第四种方法，不使用promise避免对promise的依赖
 */

Loader = (function() {

    var group_queue = [];      // group list
    var current_group_finished = 0;
    var finish_callback;
    var finish_context;

    var loadFinished = function() {
        current_group_finished ++;
        if (current_group_finished == group_queue[0].length) {
            next_group();
            loadGroup();
        }
    };

    var next_group = function() {
        group_queue.shift();
    };

    var loadError = function(oError) {
        console.error("The script " + oError.target.src + " is not accessible.");
    };

    var loadScript = function(url) {
        console.log("load "+url);
        var script = document.createElement('script');
        script.type = "text/javascript";

        if (script.readyState){  //IE
            script.onreadystatechange = function() {
                if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                    script.onreadystatechange = null;
                    loadFinished();
                }
            };
        } else {  //Others
            script.onload = function(){
                loadFinished();
            };
        }

        script.onerror = loadError;

        script.src = url+'?'+'time='+Date.parse(new Date());
        document.body.appendChild(script);
    };

    var loadGroup = function() {
        if (group_queue.length == 0) {
            finish_callback.call(finish_context);
            return;
        }
        current_group_finished = 0;
        for (var idx=0; idx < group_queue[0].length; idx++) {
            loadScript(group_queue[0][idx]);
        }
    };

    var addGroup = function(url_array) {
        if (url_array.length > 0) {
            group_queue.push(url_array);
        }
    };

    var fire = function(callback, context) {
        finish_callback = callback || function() {};
        finish_context = context || {};
        loadGroup();
    };

    var instanceAPI = {
        load : function() {
            addGroup([].slice.call(arguments));
            return instanceAPI;
        },

        done : fire,
    };
    return instanceAPI;

})();
function getCss(url,callback){
    var link=document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", url);
    document.getElementsByTagName("head")[0].appendChild(link);
    link.onload=callback;
}
