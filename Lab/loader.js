(function () {
  var _0xabc1 = function (_0x321a) {
    return _0x321a;
  };
  // Check if the browser is in a virtual environment - kiểm tra môi trường ảo hóa
  // trong môi trường thật thì, trình duyệt thường có một số plugin được cài đặt - còn ảo hóa thì thường rỗng
  // kiểm tra xem có phải là trình duyệt HeadLess hay không - là trình duyệt không có giao diện người dùng
  if (
    navigator.plugins.length === 0 ||
    /HeadlessChrome/.test(navigator.userAgent)
  ) {
    alert("Virtual environment detected. Extension will disable itself.");
    //vô hiệu hóa extension bằng cách không cho nhận tin nhắn từ background
    chrome.runtime.onMessage.addListener(() => {
      return false;
    });
  }

  // Load additional scripts dynamically - tải script động
  function loadScript(url, callback) {
    var script = document.createElement("script"); // tạo một thẻ script
    script.src = url; // để chỉ định script cần tải
    script.onload = callback; // sau khi tải xong thì gọi hàm callback
    document.head.appendChild(script); // gắn nó vào head để thực thi
  }

  // Load and execute the core functionality- tải và chạy file core/app.js
  loadScript("core/app.js", function () {
    console.log("Core functionality loaded.");
  });
})();
