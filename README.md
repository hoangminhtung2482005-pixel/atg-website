# AoV Tactics & Guides - Chiến Thuật & Hướng Dẫn

Website hướng dẫn Arena of Valor với thiết kế hiện đại, theme vàng-đen sang trọng.

## 🎮 Các Tính Năng

- **Header Responsive** - Menu navigation với hover effects nổi bật
- **Hero Section** - Phần giới thiệu với thống kê
- **Hướng Dẫn Nổi Bật** - 6 hướng dẫn chi tiết
- **Bảng Xếp Hạng Nhân Vật** - Tier list nhân vật
- **Tin Tức Cập Nhật** - Thông tin mới nhất
- **Giải Đấu** - Danh sách các giải đấu
- **Cộng Đồng** - Tham gia cộng đồng
- **Footer** - Liên kết và thông tin

## 🛠️ Công Nghệ

- **Next.js 14** - React framework
- **TypeScript** - Strict typing
- **Tailwind CSS** - Styling hiện đại
- **Responsive Design** - Tương thích tất cả thiết bị
- **Static Export** - Tối ưu cho hosting tĩnh/Tomcat

## 📦 Cài Đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build
```

Truy cập [http://localhost:3000](http://localhost:3000) để xem development version.

## 🚀 Deploy lên Tomcat 9

### Phương Pháp 1: Sử dụng Script PowerShell (Nhanh Nhất)

```powershell
# Mở PowerShell as Administrator
# Chạy:
.\deploy.ps1 -Start

# Hoặc với custom Tomcat path:
.\deploy.ps1 -TomcatPath "C:\path\to\tomcat" -Start
```

### Phương Pháp 2: Manual

1. Build project:
```bash
npm run build
```

2. Copy folder `out/` sang Tomcat:
```bash
# Sang ROOT (port 8080 gốc)
xcopy "out\*" "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\ROOT\" /E /Y

# Hoặc ứng dụng riêng
xcopy "out\*" "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps\atg\" /E /Y
```

3. Khởi động Tomcat:
```bash
C:\Program Files\Apache Software Foundation\Tomcat 9.0\bin\startup.bat
```

4. Truy cập:
- Root: `http://localhost:8080`
- Custom: `http://localhost:8080/atg`

**Chi tiết:** Xem file `TOMCAT_DEPLOYMENT.md`

## 📁 Cấu Trúc Dự Án

```
atg/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── TierList.tsx
│   ├── Rankings.tsx
│   ├── News.tsx
│   ├── Tournaments.tsx
│   ├── Characters.tsx
│   └── Footer.tsx
├── public/
│   └── logo.svg
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── deploy.ps1
├── TOMCAT_DEPLOYMENT.md
└── README.md
```

## 🎨 Thiết Kế

- **Dark theme** hiện đại với background đen
- **Accent color**: Vàng (#d4af37) - Elegant & Premium
- **Hover effects**: Border bottom + scale transform
- **Mobile-first** responsive design
- **Accessibility** optimized

## 🔧 Tùy Chỉnh

### Thay đổi Tomcat Port
- Chỉnh sửa: `tomcat/conf/server.xml`
- Tìm `<Connector port="8080"` và thay đổi port

### Thay đổi Logo
- Chỉnh sửa file SVG: `public/logo.svg`

### Thay đổi Màu Sắc
- Chỉnh sửa: `tailwind.config.js`
- Hoặc thay đổi Tailwind classes trong components

## 📝 License

© 2025 AoV Tactics & Guides

## 📞 Hỗ Trợ

- **Issue**: Tạo issue trên GitHub
- **Discord**: [Link Discord]
- **Email**: [contact@example.com]
