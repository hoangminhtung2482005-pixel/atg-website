'use client'

export default function Community() {
  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-lg p-12 text-center">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900 via-black to-black opacity-50"></div>
          <div className="absolute inset-0 border border-yellow-600 rounded-lg"></div>

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-6 uppercase">
              Tham Gia Cộng Đồng
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Kết nối với các game thủ AoV, chia sẻ chiến lược, học hỏi từ những chuyên gia, và tham gia các giải đấu. Trở thành một phần của cộng đồng đang phát triển của chúng tôi!
            </p>
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-12 py-4 rounded font-bold uppercase transition transform hover:scale-105 text-lg">
              Tham Gia Ngay
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-slate-900 border border-yellow-600 rounded-lg p-6 text-center">
            <span className="text-4xl">💬</span>
            <h3 className="text-yellow-300 font-bold mt-4">Discord Hoạt Động</h3>
            <p className="text-gray-400 text-sm mt-2">Tham gia với hơn 10K game thủ thảo luận chiến lược</p>
          </div>
          <div className="bg-slate-900 border border-yellow-600 rounded-lg p-6 text-center">
            <span className="text-4xl">📊</span>
            <h3 className="text-yellow-300 font-bold mt-4">Bảng Xếp Hạng</h3>
            <p className="text-gray-400 text-sm mt-2">Cạnh tranh và leo bảng xếp hạng</p>
          </div>
          <div className="bg-slate-900 border border-yellow-600 rounded-lg p-6 text-center">
            <span className="text-4xl">🎓</span>
            <h3 className="text-yellow-300 font-bold mt-4">Học & Cải Thiện</h3>
            <p className="text-gray-400 text-sm mt-2">Truy cập các hướng dẫn và video hướng dẫn</p>
          </div>
        </div>
      </div>
    </section>
  )
}
