import re 
import sys 
import os 

# hàm giải mã chuỗi được mã hóa bằng hàm unesscape trong js
def decode_js_unescape(encoded_str) :  
    # encoded_str là chuỗi chứa các kí tự đã bị mã hóa dưới dạng %uXXXX
    # giải mã chuỗi đã được mã hóa bằng hàm js unescape 
    # mỗi %uXXX được convert thành 2 bytes
    hex_codes = re.findall(r'%u[0-9a-fA-F]{4}', encoded_str)
    # %u[0-9a-fA-F]{4} là một regular expression để match các chuỗi có dạng %uXXXX - trong đó XXXX là một số hexa gồm 4 ký tự 
    result = bytearray() # một mảng byte trống để lưu kết quả đã giải mã 
    for hex_code in hex_codes : 
        code_int = int(hex_code[2:], 16) # chuyển hex_code thành số nguyên
        # phân tách số nguyên thành 2 bytes 
        low = code_int & 0xff    # Lấy byte thấp (2 chữ số cuối của hex)
        high = (code_int >> 8) & 0xff  # Lấy byte cao (2 chữ số đầu của hex) 
        # Phép >> là dịch sang phải n bit 
        # Sử dụng phép AND để giữ lại 8 bit cuối 
        result.extend([low , high])
    return bytes(result) # trả về kết quả dưới dạng bytes
def extract_shellcode_payloads (js_file_path) :
    # đọc nội dung file js và extracts encoded shellcode payload 
    # tìm kiếm các comments payload theo sau là hàm unescape 
    # trả về một list của tuples : (label , encoded_payload)
    with open (js_file_path , 'r') as js_file :
        js_code = js_file.read()
    # pattern : 
    # Tìm kiếm các comment có dạng :  // <label> payload 
    # Theo sau (trên một dòng hoặc nhiều dòng) bởi hàm unescape
    # Regex sử dụng DOTALL để cho phép newlines giữa comment và gọi hàm unescape
    pattern = re.compile(
        r'//\s*(.*?)\s+payload\s*[\r\n]+.*?unescape\(\s*"([^"]+)"\s*\)',
        re.IGNORECASE | re.DOTALL
    )
    payloads = [] 
    for m in pattern.finditer(js_code) :
        label = m.group(1).strip()  
        encoded_str = m.group(2)
        payloads.append((label , encoded_str))
    return payloads
def main(js_file_path , output_dir) : 
    if not os.path.exists(output_dir) :
        os.makedirs(output_dir)
    payloads = extract_shellcode_payloads(js_file_path)
    if not payloads :
        print ("[!] No shellcode payloads found in the provided JS file")
        return 
    for label , encoded_str in payloads :
        print (f"[+] Extracting shellcode payload : '{label}'")
        shellcode_bytes = decode_js_unescape(encoded_str)
        # tạo một safe filename dựa trên label 
        safe_label = label.replace(' ' , '_').replace('.' , '_')
        output_file = os.path.join(output_dir , f'{safe_label}_shellcode.bin')
        with open (output_file , 'wb') as f :   
            f.write(shellcode_bytes)
        print (f"[+] Shellcode payload saved to : '{output_file}'")
if __name__ == '__main__' :
    if len (sys.argv) != 3 : 
        print (f"Usage : {sys.argv[0]} <js_file_path> <output_dir>")
        sys.exit(1)
    js_file_path = sys.argv[1]
    output_dir = sys.argv[2]
    main(js_file_path , output_dir)


"""
Note : 
Phép `>>` dịch phải để lấy phần byte cao.
Phép `& 0xFF` giúp giới hạn kết quả trong 1 byte (8 bit), tránh ảnh hưởng bởi các bit thừa bên trái.  
"""

"""
Giải thích regex : 

//\s*  - Tìm comment trong JS 
- // : comment 
- \s* : cho phép có hoặc không có khoảng trắng sau // 

(.*?) - Trích xuất tên payload 
- .*? : bất kỳ ký tự nào 

\s+payload\s* - Xác định comment chứa payload  
- \s+ : Có ít nhất một khoảng trắng giữa label và payload 
- payload : đảm bảo comment có chứa "payload" 
- \s* : cho phép có hoặc không có khoảng trắng sau payload

[\r\n]+ - cho phép xuống dòng 
- [\r\n]+ : cho phép xuống dòng một hoặc nhiều lần

.*? - Bỏ qua nội dung giữa comment và unescape()
- .*? : bất kỳ ký tự nào
- ? : Dừng ngay khi tìm thấy unescape()

unescape\(\s*"([^"]+)"\s*\) - Trích xuất chuỗi mã hóa 
- unescape\(\s* : TÌm unescape( , cho phép khoảng trắng trước " 
- ([^"]+) : Trích xuất nội dung bên trong dấu " (shellcode)
- \s*\) : cho phép khoảng trắng trước ) 

"""