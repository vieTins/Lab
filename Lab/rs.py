import base64
t = "d3d3LmZhY2Vib29rLmNvbQ=="
print(base64.b64decode(t).decode('utf-8'))