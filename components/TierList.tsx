'use client'

export default function TierList() {
  const guides = [
    { title: 'Hướng Dẫn Cơ Bản', icon: '📖', desc: 'Bắt đầu hành trình AoV' },
    { title: 'Hướng Dẫn Mid Lane', icon: '⚔️', desc: 'Làm chủ mid lane' },
    { title: 'Hướng Dẫn Support', icon: '🛡️', desc: 'Trở thành support tuyệt vời' },
    { title: 'Hướng Dẫn ADC', icon: '🏹', desc: 'Mang về chiến thắng' },
    { title: 'Hướng Dẫn Jungle', icon: '🌳', desc: 'Kiểm soát jungle' },
    { title: 'Phân Tích Meta', icon: '📊', desc: 'Meta hiện tại' },
  ]

  const itemBuilds = [
    { name: 'Build Tank', heroes: 5 },
    { name: 'Sát Thương Burst', heroes: 8 },
    { name: 'Kiểm Soát', heroes: 6 },
  ]

  return (
    <section id="guides" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12 uppercase">Hướng Dẫn Nổi Bật</h2>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="bg-slate-900 border border-yellow-600 hover:border-yellow-400 rounded-lg p-4 text-center cursor-pointer transition transform hover:scale-105"
            >
              <div className="text-4xl mb-3">{guide.icon}</div>
              <h3 className="text-white font-bold text-sm mb-1">{guide.title}</h3>
              <p className="text-gray-400 text-xs">{guide.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-yellow-400 mt-16 mb-8 uppercase">Build Vật Phẩm</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {itemBuilds.map((build) => (
            <div key={build.name} className="bg-slate-900 border border-yellow-600 rounded-lg p-6 hover:border-yellow-400 transition">
              <h3 className="text-yellow-400 font-bold text-lg mb-2">{build.name}</h3>
              <p className="text-gray-400 text-sm">Cho {build.heroes} nhân vật</p>
              <button className="mt-4 w-full bg-yellow-600 hover:bg-yellow-500 text-black py-2 rounded font-bold uppercase text-xs transition">
                Xem Build
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
