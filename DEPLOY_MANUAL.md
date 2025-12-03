## 📝 Hướng Dẫn Deploy Manual Tomcat 9

### ✅ Bước 1: Build hoàn tất
Website đã build xong! File nằm tại:
```
C:\Users\ASUS\Desktop\lien-quan-web\out\
```

Và cũng đã copy sang:
```
C:\Users\ASUS\Desktop\atg-deploy\
```

### 📂 Bước 2: Copy sang Tomcat (Cách thủ công)

1. **Mở Windows Explorer (File Manager)**

2. **Dừng Tomcat 9:**
   - Đi tới: `C:\Program Files\Apache Software Foundation\Tomcat 9.0\bin\`
   - Double-click `shutdown.bat`
   - Chờ Tomcat dừng (khoảng 3-5 giây)

3. **Xóa folder cũ:**
   - Đi tới: `C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\`
   - Xóa folder `ROOT` (nếu có)

4. **Tạo folder ROOT mới:**
   - Trong `webapps\`, click chuột phải → New Folder
   - Đặt tên là `ROOT`

5. **Copy file website:**
   - Mở folder: `C:\Users\ASUS\Desktop\atg-deploy\`
   - Select all (Ctrl+A)
   - Copy (Ctrl+C)
   - Vào folder ROOT vừa tạo
   - Paste (Ctrl+V)

6. **Khởi động Tomcat:**
   - Đi tới: `C:\Program Files\Apache Software Foundation\Tomcat 9.0\bin\`
   - Double-click `startup.bat`
   - Chờ Tomcat khởi động (khoảng 5-10 giây)

### 🌐 Bước 3: Kiểm tra website

**Trên máy của bạn:**
```
http://localhost:8080
```

**Trên máy khác (cùng mạng Wi-Fi):**
```
http://<IP-của-bạn>:8080
```

Tìm IP của bạn:
```powershell
ipconfig
```

Tìm dòng: `IPv4 Address` (VD: 192.168.1.100)

---

### ❌ Nếu gặp lỗi quyền truy cập:

**Chạy PowerShell as Administrator:**

1. Right-click PowerShell → Run as Administrator
2. Chạy lệnh:
```powershell
$TomcatPath = "C:\Program Files\Apache Software Foundation\Tomcat 9.0"
$WebappPath = "$TomcatPath\webapps\ROOT"
if (Test-Path $WebappPath) { Remove-Item "$WebappPath\*" -Recurse -Force -ErrorAction SilentlyContinue }
New-Item -ItemType Directory -Path $WebappPath -Force | Out-Null
Copy-Item "C:\Users\ASUS\Desktop\atg-deploy\*" -Destination $WebappPath -Recurse -Force
Write-Host "Thanh cong!" -ForegroundColor Green
```

3. Mở lại `startup.bat` để khởi động Tomcat

---

## 📍 Vị trí quan trọng:

| Mục đích | Đường dẫn |
|---------|----------|
| Website build | `C:\Users\ASUS\Desktop\lien-quan-web\out\` |
| Website deploy | `C:\Users\ASUS\Desktop\atg-deploy\` |
| Tomcat webapps | `C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\` |
| Shutdown Tomcat | `C:\Program Files\Apache Software Foundation\Tomcat 9.0\bin\shutdown.bat` |
| Startup Tomcat | `C:\Program Files\Apache Software Foundation\Tomcat 9.0\bin\startup.bat` |

---

## 🎉 Xong!

Khi thấy website tại `http://localhost:8080`, mọi người cùng mạng có thể vào được bằng cách thay `localhost` bằng IP của bạn.
