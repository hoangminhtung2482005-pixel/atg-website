'use client'

export default function News() {
  const news = [
    {
      id: 1,
      title: 'Phân Tích Bản Cập Nhật 1.15',
      category: 'Cân Bằng',
      image: '📋',
      excerpt: 'Những thay đổi mới và sự thay đổi meta',
    },
    {
      id: 2,
      title: 'Phỏng Vấn Cầu Thủ Pro',
      category: 'Phỏng Vấn',
      image: '🎙️',
      excerpt: 'Chia sẻ kinh nghiệm từ cầu thủ hàng đầu',
    },
    {
      id: 3,
      title: 'Những Pha Chơi Hay Nhất',
      category: 'Giải Đấu',
      image: '🏆',
      excerpt: 'Những pha chơi tốt nhất từ các sự kiện gần đây',
    },
  ]

  return (
    <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12 uppercase">Tin Tức Mới Nhất</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {news.map((article) => (
            <article
              key={article.id}
              className="bg-slate-900 border border-yellow-600 rounded-lg overflow-hidden hover:border-yellow-400 transition group cursor-pointer"
            >
              {/* Image Area */}
              <div className="h-40 bg-gradient-to-br from-yellow-600 to-yellow-500 opacity-20 flex items-center justify-center text-5xl group-hover:opacity-30 transition-opacity">
                {article.image}
              </div>

              {/* Content */}
              <div className="p-4">
                <span className="inline-block px-2 py-1 text-xs font-bold rounded bg-yellow-600 text-black uppercase mb-2">
                  {article.category}
                </span>
                <h3 className="text-lg font-bold text-yellow-300 mb-2 group-hover:text-yellow-200 transition line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {article.excerpt}
                </p>
                <button className="text-yellow-400 font-semibold text-sm hover:text-yellow-300 transition">
                  Đọc Thêm →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="border border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:text-black px-8 py-3 rounded font-bold uppercase transition">
            Xem Tất Cả Tin Tức
          </button>
        </div>
      </div>
    </section>
  )
}
