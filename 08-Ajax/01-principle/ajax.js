/**
 * Created by ganyihuan on 16/5/10.
 */

/**
 * @param {type} 方法
 * @param {type} 地址
 * @param {type} 数据
 * @param {type} 成功的回调
 * @return: 等待服务器返回内容
 */
function ajax(method, url, data, success) {
  var xhr = null;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  if (method == "get" && data) {
    url += "?" + data;
  }

  xhr.open(method, url, true);
  if (method == "get") {
    xhr.send();
  } else {
    // 请求头格式, 固定的内容
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
  }

  // 等待服务器返回内容
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        success && success(xhr.responseText);
      } else {
        alert("wrong", +xhr.status);
      }
    }
  };
}
