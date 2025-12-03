## 🚀 GITHUB + VERCEL AUTO-DEPLOY SETUP

### 📋 Bước 1: Tạo Repository trên GitHub

1. Đăng ký: https://github.com/signup (hoặc login nếu có)
2. Tạo repo mới:
   - Click "+" → New repository
   - Name: `atg-website`
   - Public
   - Click "Create repository"

### 📝 Bước 2: Push code lên GitHub

Chạy các lệnh này:

```bash
cd C:\Users\ASUS\Desktop\lien-quan-web

# Config Git
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Init repo
git init
git add .
git commit -m "Initial commit - ATG Website"
git branch -M main

# Add remote (thay YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/atg-website.git

# Push
git push -u origin main
```

### 🔗 Bước 3: Connect GitHub → Vercel

1. Login Vercel: https://vercel.com/login
2. Click "Add New..." → "Project"
3. Click "Import Git Repository"
4. Authorize GitHub
5. Select `atg-website` repository
6. Click "Import"
7. Framework: Next.js (auto-detect)
8. Click "Deploy"

### ✅ Bây giờ:

**Mỗi khi bạn push code lên GitHub:**
```bash
git add .
git commit -m "Update message"
git push
```

**Vercel tự động:**
- Pull code mới
- Build project
- Deploy website ✅

### 🌐 Website sẽ available tại:
```
https://your-project.vercel.app
```

(URL sẽ appear trên Vercel Dashboard sau deploy)

---

## 🔐 Tạo GitHub Token (nếu cần)

1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token
3. Scopes: `repo`
4. Copy token
5. Dùng token làm password khi `git push`

---

## 📌 Tóm tắt:

✅ GitHub: Lưu trữ code
✅ Vercel: Auto-deploy từ GitHub
✅ Mỗi `git push` = Auto update website

**Done!** 🎉
