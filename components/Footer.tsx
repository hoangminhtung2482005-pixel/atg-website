'use client'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-600 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-yellow-600">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="100" cy="100" r="95" fill="none" stroke="#d4af37" strokeWidth="3"/>
                  <circle cx="100" cy="100" r="90" fill="#0a0a0a"/>
                  <text x="100" y="115" fontFamily="Arial, sans-serif" fontSize="50" fontWeight="bold" fill="#d4af37" textAnchor="middle" letterSpacing="3">ATG</text>
                </svg>
              </div>
              <span className="text-yellow-400 font-bold">ATG</span>
            </div>
            <p className="text-sm text-gray-500">
              Nền tảng hướng dẫn Arena of Valor cuối cùng của bạn.
            </p>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-yellow-400 font-bold mb-4 uppercase text-sm">Hướng Dẫn</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition">Hướng Dẫn Nhân Vật</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Hướng Dẫn Build</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Hướng Dẫn Vai Trò</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-yellow-400 font-bold mb-4 uppercase text-sm">Tài Nguyên</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition">Bảng Xếp Hạng</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Build Vật Phẩm</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Thông Tin Meta</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-yellow-400 font-bold mb-4 uppercase text-sm">Cộng Đồng</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition">Discord</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Diễn Đàn</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Giải Đấu</a></li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-yellow-400 font-bold mb-4 uppercase text-sm">Theo Dõi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition">YouTube</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Twitch</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Twitter</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-600 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <p>© 2025 AoV Chiến Thuật & Hướng Dẫn. Bảo lưu mọi quyền.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-yellow-400 transition">Chính Sách Bảo Mật</a>
              <a href="#" className="hover:text-yellow-400 transition">Điều Khoản Dịch Vụ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
