/******************************************************************************
* olabs-util.js
*
* William Shulman
*
* 09.18.2010
*/

/******************************************************************************
 * getUrlParams
 */
function getUrlParams() {
    var result = {};

    var startIndex = window.location.href.indexOf('?') + 1;
    if (startIndex > 0) {
        var params = window.location.href.slice(startIndex).split('&');
        if (params && params != "") {
            for(var i = 0; i < params.length; i++) {
                var param = params[i].split('=');
                result[param[0]] = param[1];
            }
        }
    }
    return(result);
}

/******************************************************************************
 * serializeUrlParams
 */
function serializeUrlParams(params) {
    var result = "?";
    var first = true;
    if (params) {
        for (param in params) {
            if (!first) {
                result += "&";
            }
            result += param + "=" + params[param];
            first = false;
        }
    }
    return(result);
}

// This function used to use XDomainRequest in IE when available, but that was not sending cookies with requests,
// causing IE-specific bugs
function getJson(url, success, error) {
  $.get(url, null, null, "json").success(success).error(error);
}

