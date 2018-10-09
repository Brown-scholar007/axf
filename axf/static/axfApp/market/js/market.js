$(function () {
   urlStr = location.href;
   idStr = urlStr.split("/")[4];
   $span = $(document.getElementById("yellow"+idStr));
   $span.css({"width":"10px","height":"20px","border-left":"solid 5px yellow"});
});