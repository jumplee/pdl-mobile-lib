(function (root) {
    function loadJs(url) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.type = "text/javascript";

            if (script.readyState) { //IE
                script.onreadystatechange = function () {
                    if (script.readyState == "loaded" ||
                        script.readyState == "complete") {
                        script.onreadystatechange = null;
                        resolve('success: ' + url);
                    }
                };
            } else { //Others
                script.onload = function () {
                    resolve('success: ' + url);
                };
            }

            script.onerror = function () {
                reject(Error(url + 'load error!'));
            };

            script.src = url + '?' + 'time=' + Date.parse(new Date());
            document.body.appendChild(script);

        });
    }

    var cssLinkCache = {};

    function loadCss(url) {
        return new Promise(function (resolve, reject) {
            //避免重复
            if (typeof cssLinkCache[url.toString()] !== 'undefined') {
                resolve()
            } else {
                var link = document.createElement("link");
                link.setAttribute("rel", "stylesheet");
                link.setAttribute("type", "text/css");
                link.setAttribute("href", url);
                document.head.insertBefore(link, document.getElementsByTagName('link')[0]);
                link.onload = function () {
                    cssLinkCache[url.toString()] = 1;
                    resolve()
                }
                link.onerror = function () {
                    reject()
                }
            }
        });


    }
    root.loadCss = loadCss;
    root.loadJs = loadJs;
})(window)