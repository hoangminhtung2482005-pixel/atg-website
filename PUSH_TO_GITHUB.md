## 🚀 PUSH CODE LÊN GITHUB

Git repo local đã sẵn sàng! Bây giờ:

### Bước 1: Tạo repo trên GitHub

1. Truy cập: https://github.com/new
2. Repository name: `atg-website`
3. Description: `AoV Tactics & Guides - Arena of Valor Community Website`
4. Public
5. Click "Create repository"

### Bước 2: Copy HTTPS URL

Sau khi tạo, copy URL: `https://github.com/YOUR_USERNAME/atg-website.git`

### Bước 3: Push code (chạy command này)

```bash
cd C:\Users\ASUS\Desktop\lien-quan-web

# Add remote (thay URL)
git remote add origin https://github.com/YOUR_USERNAME/atg-website.git

# Rename branch
git branch -M main

# Push
git push -u origin main
```

### Bước 4: Kết nối GitHub → Vercel

1. Truy cập: https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Click "Import Git Repository"
4. Authorize GitHub (nếu chưa)
5. Select `atg-website`
6. Framework: Next.js (auto-detect)
7. Click "Deploy"

### ✅ Xong!

Mỗi lần push code lên GitHub:
```bash
git add .
git commit -m "Your message"
git push
```

**Vercel tự động deploy!** 🎉

---

**Notes:**
- Nếu cần GitHub token: https://github.com/settings/tokens
- Generate token với scope `repo`
- Dùng token làm password khi push
