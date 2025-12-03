## ⚠️ TOMCAT 9 CÓ VẤN ĐỀ

**Vấn đề:** Tomcat 9.0 hiện tại không có `bin` folder hay jar files
- Chỉ có folder `webapps` (không đầy đủ)
- Không thể khởi động được

**Giải pháp:** Cài Tomcat 9 mới (đầy đủ)

---

## ✅ Cách 1: Download & Cài Tomcat 9 Mới (Khuyến nghị)

### Bước 1: Download

1. Truy cập: https://tomcat.apache.org/download-90.cgi
2. Chọn: **64-bit Windows zip** (ngay phần "Binary Distributions")
3. Save tại: `C:\Users\ASUS\Desktop\`

### Bước 2: Extract

1. Right-click file zip → Extract All
2. Chọn: `C:\`
3. Sẽ tạo folder: `C:\apache-tomcat-9.0.x\`

### Bước 3: Copy website files

**Copy từ:**
```
C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ROOT\
```

**Paste vào:**
```
C:\apache-tomcat-9.0.x\webapps\ROOT\
```

### Bước 4: Khởi động Tomcat mới

Double-click file:
```
C:\apache-tomcat-9.0.x\bin\startup.bat
```

### Bước 5: Truy cập

```
http://localhost:8080
```

---

## ✅ Cách 2: Xóa Tomcat cũ + Cài Tomcat mới (Cách sạch)

### Xóa Tomcat cũ:
```powershell
Remove-Item "C:\Program Files\Apache Software Foundation\Tomcat 9.0\" -Recurse -Force
```

### Cài Tomcat mới như **Cách 1**

---

## 🔍 Kiểm tra Tomcat chạy chưa:

1. **Task Manager (Ctrl+Shift+Esc):**
   - Tìm process: `java.exe` hoặc `javaw.exe`

2. **PowerShell:**
```powershell
Get-Process | Where-Object {$_.ProcessName -like "*java*"}
```

3. **Truy cập:** `http://localhost:8080`
   - Nếu thấy Tomcat homepage → Chạy rồi ✅

---

## 📌 Lưu ý:

- Website files đã copy sẵn vào ROOT folder cũ
- Khi cài Tomcat mới, cần copy lại vào `webapps\ROOT\` folder mới
- Sau khi khởi động, truy cập: `http://localhost:8080`
- Chia sẻ cho bạn bè: `http://<YOUR_IP>:8080`

---

## ❓ Cần giúp gì?

Bạn muốn tôi tiếp tục hay bạn tự cài Tomcat mới?

Nếu muốn tôi làm, hãy download Tomcat 9 từ link trên rồi báo cho tôi khi xong.
