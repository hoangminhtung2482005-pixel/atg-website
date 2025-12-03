'use client'

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-block bg-yellow-600 bg-opacity-20 border border-yellow-500 rounded-full px-4 py-2 text-sm text-yellow-300 uppercase font-semibold">
            ⭐ Arena of Valor
          </div>
          <h1 className="text-6xl sm:text-7xl font-bold text-yellow-400 leading-tight">
            AoV<br/>CHIẾN THUẬT<br/>& HƯỚNG DẪN
          </h1>
          <p className="text-gray-400 text-lg">Làm chủ trò chơi với chiến lược cao cấp và hướng dẫn chi tiết</p>
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-8 py-3 rounded font-bold uppercase transition transform hover:scale-105">
            Khám Phá Hướng Dẫn
          </button>
          <div className="pt-4 flex gap-8">
            <div>
              <p className="text-gray-400 text-sm">Tổng Hướng Dẫn</p>
              <p className="text-2xl font-bold text-yellow-400">50+</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Nhân Vật</p>
              <p className="text-2xl font-bold text-yellow-400">50+</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Cộng Đồng</p>
              <p className="text-2xl font-bold text-yellow-400">10K+</p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hidden md:block">
          <div className="relative h-96">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl blur opacity-50"></div>
            <div className="relative bg-gradient-to-br from-slate-900 via-black to-black rounded-2xl overflow-hidden h-full flex items-center justify-center border border-yellow-600">
              <div className="text-center">
                <div className="text-9xl mb-4">⚔️</div>
                <p className="text-yellow-300 text-sm font-bold">AoV ARENA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
