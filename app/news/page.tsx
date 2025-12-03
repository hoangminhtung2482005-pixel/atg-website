'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NewsPage() {
  const newsList = [
    {
      id: 1,
      title: 'Patch 8.18: Cân Bằng Siêu Lớn - Phân Tích Chi Tiết',
      category: 'Phân Tích Patch',
      date: '15/11/2024',
      author: 'ATG Team',
      views: 5820,
      image: '📊',
      excerpt: 'Liên Quân Mobile vừa tung ra patch 8.18 với những thay đổi cân bằng siêu lớn. Chúng tôi sẽ phân tích chi tiết những nhân vật được buff/nerf và ảnh hưởng đến meta.',
      content: `Patch 8.18 đã mang lại nhiều thay đổi quan trọng:

• Allain: Tăng sát thương +8%, giảm cooldown kỹ năng 1
• Elandorr: Giảm armor +2, tăng AP scaling
• Florentino: Tăng attack speed, giảm HP ban đầu
• Veera: Tăng range CC, nerfchút AP ratio

Những thay đổi này sẽ ảnh hưởng lớn đến meta game hiện tại...`
    },
    {
      id: 2,
      title: 'Phỏng Vấn Pro: "Cách Tôi Lên Rank Galaxy"',
      category: 'Phỏng Vấn',
      date: '12/11/2024',
      author: 'ATG Journalists',
      views: 4230,
      image: '🎤',
      excerpt: 'Chúng tôi có cơ hội phỏng vấn Tuấn Anh Gaming - một trong những Pro Player hàng đầu VN. Anh chia sẻ kinh nghiệm và bí quyết để lên Galaxy.',
      content: `Tuấn Anh Gaming - Top 1 Leaderboard chia sẻ:

"Mình bắt đầu từ Gold và mất 2 năm để lên Galaxy. Những điều quan trọng nhất:

1. Focus vào 2-3 nhân vật, chơi thành thạo
2. Map awareness là chìa khóa
3. Quản lý tinh thần, kinh nghiệm tốt
4. Team play và communication với team
5. Luôn học hỏi từ những sai lầm"

Xem chi tiết cuộc phỏng vấn đầy đủ trong bài viết này...`
    },
    {
      id: 3,
      title: 'AoV Worlds 2024: Nhân Vật Được Pick Nhiều Nhất',
      category: 'Giải Đấu',
      date: '10/11/2024',
      author: 'ATG Stats',
      views: 6510,
      image: '🏆',
      excerpt: 'Tại AoV Worlds 2024, một số nhân vật đã trở thành bản map - được pick hầu như mỗi trận. Cùng xem những nhân vật áp đảo giải đấu lớn nhất năm.',
      content: `AoV Worlds 2024 vừa kết thúc với những thống kê thú vị:

Nhân vật được pick nhiều nhất:
1. Allain - 45 pick (87% pick rate)
2. Elandorr - 42 pick (80% pick rate)
3. Veera - 40 pick (77% pick rate)
4. Veres - 38 pick (73% pick rate)
5. Florentino - 35 pick (67% pick rate)

Nhân vật có win rate cao nhất:
- Allain: 68% (45 pick, 31 win)
- Veera: 65% (40 pick, 26 win)
- Elandorr: 62% (42 pick, 26 win)

Phân tích chi tiết về meta đấu chuyên nghiệp...`
    },
    {
      id: 4,
      title: 'Cẩm Nang Wards Placement: Tối Ưu Map Control',
      category: 'Hướng Dẫn',
      date: '08/11/2024',
      author: 'ATG Guide',
      views: 3450,
      image: '👁️',
      excerpt: 'Placement wards đúng cách là chìa khóa để kiểm soát map. Chúng tôi hướng dẫn bạn các vị trí wards tối ưu cho mỗi vị trí chơi.',
      content: `Wards placement là kỹ năng vô cùng quan trọng:

Vị trí wards quan trọng nhất:
- River bush (gần tower 2)
- Enemy blue buff (kiểm soát jungle)
- Tri-bush (early game)
- Baron pit (late game)
- Red buff area (gank prevention)

Timing wards:
- Early game: Mỗi 30 giây
- Mid game: Kiểm soát objective
- Late game: Wards xung quanh Baron

Tips chuyên nghiệp...`
    },
    {
      id: 5,
      title: 'Tier List Tháng 11: Meta Hiện Tại Là Gì?',
      category: 'Tier List',
      date: '05/11/2024',
      author: 'ATG Meta Analysts',
      views: 5120,
      image: '📈',
      excerpt: 'Bảng xếp hạng nhân vật tháng 11 đã được cập nhật với những thay đổi nhỏ sau patch gần đây. Xem hôm nay meta game như thế nào.',
      content: `Tier List Tháng 11/2024:

S TIER (Siêu Mạnh):
- Allain, Elandorr, Veera

A TIER (Rất Tốt):
- Florentino, Veres, Lorion

B TIER (Tốt):
- Các nhân vật khác

Những thay đổi so với tháng trước...`
    },
    {
      id: 6,
      title: 'Hội Thảo: "Mở Rộng Lối Chơi Của Bạn"',
      category: 'Cộng Đồng',
      date: '02/11/2024',
      author: 'ATG Community',
      views: 2890,
      image: '💬',
      excerpt: 'Tháng này chúng tôi tổ chức hội thảo về cách mở rộng tư duy chơi game, vượt qua những giới hạn của mình.',
      content: `Hội thảo cộng đồng tháng 11 sẽ bàn luận:

1. Cách mở rộng champion pool
2. Vượt qua plateau (đỉnh cao)
3. Tâm lý game thủ chuyên nghiệp
4. Cách phân tích demo bản thân

Đăng ký tham dự miễn phí...`
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp">
              Tin Tức & Cập Nhật
            </h1>
            <p className="text-xl text-yellow-400/80 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Luôn cập nhật thông tin mới nhất về Liên Quân Mobile
            </p>
          </div>

          {/* Featured Article */}
          <div className="mb-12 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-2 border-yellow-600/50 rounded-xl overflow-hidden hover:border-yellow-400 transition duration-300 cursor-pointer">
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-4xl">{newsList[0].image}</span>
                <span className="px-4 py-1 bg-yellow-600/30 text-yellow-400 rounded-full text-sm font-semibold border border-yellow-600/50">
                  {newsList[0].category}
                </span>
                <span className="text-slate-400 text-sm ml-auto">{newsList[0].date}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">{newsList[0].title}</h2>
              <p className="text-slate-300 text-lg mb-6">{newsList[0].excerpt}</p>
              <button className="px-6 py-2 bg-yellow-600 hover:bg-yellow-500 text-slate-950 font-bold rounded-lg transition duration-300">
                Đọc Bài Viết →
              </button>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {newsList.slice(1).map((article) => (
              <div
                key={article.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-yellow-600/30 hover:border-yellow-400 overflow-hidden transition duration-300 hover:shadow-lg hover:shadow-yellow-600/20 cursor-pointer group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{article.image}</span>
                    <span className="text-xs px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded border border-yellow-600/50">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition">
                    {article.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{article.date}</span>
                    <span>👁️ {article.views.toLocaleString()}</span>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-600/30 rounded-xl p-8 text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">Đăng Ký Nhận Tin</h2>
            <p className="text-slate-300 mb-6">Nhận những bài viết, hướng dẫn mới nhất hàng tuần</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-4 py-2 bg-slate-800 text-white rounded-lg border border-yellow-600/30 focus:border-yellow-400 focus:outline-none"
              />
              <button className="px-6 py-2 bg-yellow-600 hover:bg-yellow-500 text-slate-950 font-bold rounded-lg transition duration-300">
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
