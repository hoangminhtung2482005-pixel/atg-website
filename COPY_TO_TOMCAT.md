## 🎯 HƯỚNG DẪN COPY FILE SANG TOMCAT (Thủ Công)

### 📍 Các đường dẫn cần dùng:

**Nguồn (Source):**
```
C:\Users\ASUS\Desktop\atg-deploy\
```

**Đích (Destination):**
```
C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ROOT\
```

### 📋 Các bước:

#### **Cách 1: Dùng Windows Explorer (Dễ nhất)**

1. **Mở 2 Windows Explorer window:**
   - Window 1: `C:\Users\ASUS\Desktop\atg-deploy\` (source)
   - Window 2: `C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ROOT\` (destination)

2. **Copy tất cả file từ Window 1:**
   - Click bên trong window 1
   - Ctrl+A (Select All)
   - Ctrl+C (Copy)

3. **Paste vào Window 2:**
   - Click bên trong window 2
   - Ctrl+V (Paste)
   - Chọn "Replace" nếu có dialog

4. **Chờ copy xong** (21 files)

#### **Cách 2: Dùng Command (Nếu Cách 1 không được)**

1. **Right-click PowerShell → Run as Administrator**

2. **Chạy lệnh:**
```powershell
Remove-Item "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ROOT\*" -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item "C:\Users\ASUS\Desktop\atg-deploy\*" -Destination "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ROOT\" -Recurse -Force
Write-Host "Copy xong!" -ForegroundColor Green
```

### ✅ Kiểm tra:

Sau khi copy, folder ROOT phải chứa:
- `index.html`
- `404.html`
- `logo.svg`
- `_next/` (folder)

### 🚀 Sau đó:

1. **Double-click để start Tomcat:**
   ```
   C:\Program Files\Apache Software Foundation\Tomcat 9.0\bin\startup.bat
   ```
   (Nếu folder bin có)

2. **Hoặc nếu không có bin folder:**
   - Kiểm tra xem Tomcat chạy hay chưa
   - Truy cập: `http://localhost:8080`

---

## ℹ️ Lưu ý:

- Nếu gặp "Access Denied", cần chạy as Administrator
- Tomcat cần khởi động lại sau khi copy file
- Website sẽ available tại: `http://localhost:8080`
- Chia sẻ cho người khác: `http://<IP-của-bạn>:8080`

---

**Bạn đã chuẩn bị:**
✅ Website build tại: `C:\Users\ASUS\Desktop\lien-quan-web\out\`
✅ Website copy tại: `C:\Users\ASUS\Desktop\atg-deploy\`
✅ Original ROOT backed up: `C:\Users\ASUS\Desktop\ROOT-original\`

**Tiếp theo:** Copy file thủ công hoặc chạy PowerShell as Administrator
