'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GuidesPage() {
  const guides = [
    {
      id: 1,
      title: 'Hướng Dẫn Tân Thủ',
      description: 'Học cách chơi Liên Quân Mobile từ đầu, tìm hiểu các tính năng cơ bản.',
      category: 'Cơ Bản',
      views: 5230,
      date: '15/11/2024'
    },
    {
      id: 2,
      title: 'Cách Chơi Vị Trí Đường Giữa',
      description: 'Chiến lược, build, và cách farming hiệu quả cho vị trí Mid Lane.',
      category: 'Chiến Lược',
      views: 3420,
      date: '12/11/2024'
    },
    {
      id: 3,
      title: 'Combo Kỹ Năng Hạn Chế Đối Thủ',
      description: 'Tìm hiểu các combo disable hiệu quả để kiểm soát trận đấu.',
      category: 'Kỹ Năng',
      views: 4150,
      date: '10/11/2024'
    },
    {
      id: 4,
      title: 'Build Tank Bền Bỉ',
      description: 'Các build tank phòng ngự mạnh nhất cho meta hiện tại.',
      category: 'Build',
      views: 2890,
      date: '08/11/2024'
    },
    {
      id: 5,
      title: 'Lên Level Đội Hình Nhanh',
      description: 'Tối ưu hóa tinh thần, kinh nghiệm để farm nhanh nhất.',
      category: 'Chiến Lược',
      views: 3560,
      date: '05/11/2024'
    },
    {
      id: 6,
      title: 'Chiến Lược Team Fight',
      description: 'Cách nhóm lại, vị trí chiến đấu, và cách chiếm quân xanh.',
      category: 'Chiến Lược',
      views: 4780,
      date: '02/11/2024'
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
              Hướng Dẫn Chi Tiết
            </h1>
            <p className="text-xl text-yellow-400/80 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Tất cả những gì bạn cần biết để trở thành Game Master
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {['Tất Cả', 'Cơ Bản', 'Chiến Lược', 'Kỹ Năng', 'Build'].map((filter) => (
              <button
                key={filter}
                className="px-6 py-2 rounded-full border-2 border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:text-slate-950 transition duration-300"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {guides.map((guide) => (
              <div
                key={guide.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-yellow-600/30 hover:border-yellow-400 transition duration-300 cursor-pointer hover:shadow-lg hover:shadow-yellow-600/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm px-3 py-1 rounded-full bg-yellow-600/20 text-yellow-400 border border-yellow-600/50">
                    {guide.category}
                  </span>
                  <span className="text-xs text-slate-400">{guide.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{guide.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">👁️ {guide.views.toLocaleString()} lượt xem</span>
                  <button className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm">
                    Đọc Thêm →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
