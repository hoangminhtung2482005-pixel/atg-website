# Hướng Dẫn Deploy ATG trên Tomcat 9

## Bước 1: Build Project Next.js

```bash
# Cài đặt dependencies
npm install

# Build project để export tĩnh
npm run build
```

Sau khi build thành công, folder `out/` sẽ chứa tất cả các file tĩnh.

## Bước 2: Chuẩn Bị Tomcat 9

### Vị trí Tomcat 9
- **Windows**: Thường ở `C:\Program Files\Apache Software Foundation\Tomcat 9.0\` hoặc tùy vào cài đặt của bạn

### Cấu Trúc Thư Mục Tomcat
```
tomcat-home/
├── bin/          # Các script khởi động
├── conf/         # Cấu hình Tomcat
├── webapps/      # Nơi deploy các ứng dụng web
│   ├── ROOT/     # Ứng dụng mặc định (port 8080)
│   └── ...
└── ...
```

## Bước 3: Deploy

### Tùy Chọn A: Deploy vào ROOT (Port 8080)

1. Sao chép tất cả file từ folder `out/` đến `webapps/ROOT/`

```bash
# Copy từ dự án sang Tomcat ROOT
xcopy "C:\Users\ASUS\Desktop\lien-quan-web\out\*" "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ROOT\" /E /Y
```

2. Khởi động Tomcat:
```bash
# Chạy Tomcat
C:\Program Files\Apache Software Foundation\Tomcat 9.0\bin\startup.bat
```

3. Truy cập tại: `http://localhost:8080`

### Tùy Chọn B: Deploy ứng dụng riêng (Custom Path)

1. Tạo thư mục ứng dụng:
```bash
mkdir "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\atg"
```

2. Sao chép file:
```bash
xcopy "C:\Users\ASUS\Desktop\lien-quan-web\out\*" "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\atg\" /E /Y
```

3. Khởi động Tomcat

4. Truy cập tại: `http://localhost:8080/atg`

## Bước 4: Dừng Tomcat

```bash
# Script dừng Tomcat
C:\Program Files\Apache Software Foundation\Tomcat 9.0\bin\shutdown.bat
```

## Kiểm Tra Kết Quả

- Kiểm tra file đã được copy: `webapps/ROOT/` hoặc `webapps/atg/` có chứa các file HTML, CSS, JS
- Kiểm tra logs: `logs/catalina.out` hoặc `logs/catalina.YYYY-MM-DD.log`

## Lệnh Build & Deploy Nhanh (PowerShell)

```powershell
# Build project
npm run build

# Copy sang Tomcat ROOT
$source = "C:\Users\ASUS\Desktop\lien-quan-web\out\*"
$destination = "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ROOT\"
Copy-Item -Path $source -Destination $destination -Recurse -Force

# Khởi động Tomcat
& "C:\Program Files\Apache Software Foundation\Tomcat 9.0\bin\startup.bat"

Write-Host "Deploy thành công! Truy cập tại http://localhost:8080"
```

## Ghi Chú

- Next.js đã được cấu hình để export tĩnh (`output: 'export'`)
- Tất cả hình ảnh được unoptimized cho tương thích
- Đảm bảo Tomcat port 8080 không bị chiếm bởi ứng dụng khác
- Nếu cần thay đổi port, chỉnh sửa `conf/server.xml`

## Troubleshooting

### Port 8080 đã được sử dụng
```bash
# Tìm process sử dụng port 8080
netstat -ano | findstr :8080

# Dừng process (PID là ID của process)
taskkill /PID <PID> /F
```

### Tomcat không khởi động
- Kiểm tra Java đã được cài: `java -version`
- Kiểm tra environment variable JAVA_HOME
- Kiểm tra logs trong `logs/` folder
