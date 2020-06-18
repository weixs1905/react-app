// import { trim, isType } from "@utils";

const doc = window.document;
function get(cookie_name) {
  var allcookies = document.cookie;
		//索引长度，开始索引的位置
    var cookie_pos = allcookies.indexOf(cookie_name);
    // 如果找到了索引，就代表cookie存在,否则不存在
    if (cookie_pos != -1) {
        // 把cookie_pos放在值的开始，只要给值加1即可
        //计算取cookie值得开始索引，加的1为“=”
        cookie_pos = cookie_pos + cookie_name.length + 1; 
        //计算取cookie值得结束索引
        var cookie_end = allcookies.indexOf(";", cookie_pos);
        
        if (cookie_end == -1) {
            cookie_end = allcookies.length;

        }
        //得到想要的cookie的值
        var value = unescape(allcookies.substring(cookie_pos, cookie_end)); 
    }
    return value;
}

function set(name, value, expires, path, domain, secure) {
  var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  if (expires instanceof Date) {
      cookieText += "; expires=" + expires.toGMTString();
  }

  if (path) {
      cookieText += "; path=" + path;
  }

  if (domain) {
      cookieText += "; domain=" + domain;
  }

  if (secure) {
      cookieText += "; secure";
  }
  document.cookie = cookieText;
}

function remove(key) {
  if (!key || !_has(key)) {
    return;
  }
  doc.cookie = escape(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

// function clearAll() {
//   Object.keys(all()).forEach(function(key) {
//     remove(key);
//   });
// }

function _has(key) {
  return new RegExp(
    "(?:^|;\\s*)" + escape(key).replace(/[-.+*]/g, "\\$&") + "\\s*\\="
  ).test(doc.cookie);
}

export default {
  get,
  // all,
  set,
  remove,
  // clearAll,
  has: _has
};
