from Crypto.Cipher import AES 
from Crypto.Util.Padding import pad, unpad
from Crypto.Random import get_random_bytes

# tạo khóa AES 256 bit và IV 16 bytes 
key = get_random_bytes(32)
iv = get_random_bytes(16)

data = "Hello World"
data = data.encode() # chuyển dữ liệu thành dạng bytes

# mã hóa dữ liệu 
ciper = AES.new(key, AES.MODE_CBC, iv) 
cipertext = ciper.encrypt(pad(data, AES.block_size)) # thêm padding cho dữ liệu 
print("Cipertext (hex) = " + cipertext.hex()) 

# giải mã dữ liệu 
deciper = AES.new(key, AES.MODE_CBC, iv)
plaintext = unpad(deciper.decrypt(cipertext), AES.block_size) # bỏ padding cho dữ liệu
decrypted_text = plaintext.decode('utf-8')

print("Decrypted text = " + decrypted_text)