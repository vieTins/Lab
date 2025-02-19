(function () {
  window.CryptoUtils = {
    encrypt: function (data) {
      //   sử dụng mã hóa AES với key là supersecretkey123 và iv được tạo ngẫu nhiên
      const key = CryptoJS.enc.Utf8.parse("SuperSecretKey123");
      const iv = CryptoJS.lib.WordArray.random(16);
      const encrypted = CryptoJS.AES.encrypt(data, key, { iv: iv });
      //    trả về chuỗi base64 của dữ liệu đã mã hóa
      return encrypted.toString(CryptoJS.enc.Base64);
    },
  };
})();
