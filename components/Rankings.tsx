'use client'

export default function Rankings() {
  const heroes = [
    { rank: 1, name: 'Allain', role: 'Tank', tier: 'S', color: 'from-yellow-600 to-yellow-500' },
    { rank: 2, name: 'Elandorr', role: 'Chiến Binh', tier: 'S', color: 'from-yellow-600 to-yellow-500' },
    { rank: 3, name: 'Florentino', role: 'Assassin', tier: 'A', color: 'from-red-600 to-orange-500' },
    { rank: 4, name: 'Veera', role: 'Hỗ Trợ', tier: 'A', color: 'from-blue-600 to-cyan-500' },
    { rank: 5, name: 'Veres', role: 'Chiến Binh', tier: 'B', color: 'from-purple-600 to-pink-500' },
  ]

  return (
    <section id="heroes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12 uppercase">Bảng Xếp Hạng Nhân Vật</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Heroes Ranking */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900 border border-yellow-600 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-black border-b border-yellow-600">
                    <th className="px-6 py-4 text-left text-yellow-400 text-sm font-bold uppercase">Hạng</th>
                    <th className="px-6 py-4 text-left text-yellow-400 text-sm font-bold uppercase">Nhân Vật</th>
                    <th className="px-6 py-4 text-left text-yellow-400 text-sm font-bold uppercase">Vai Trò</th>
                    <th className="px-6 py-4 text-center text-yellow-400 text-sm font-bold uppercase">Tier</th>
                  </tr>
                </thead>
                <tbody>
                  {heroes.map((hero) => (
                    <tr key={hero.rank} className="border-b border-slate-700 hover:bg-slate-800 transition">
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${hero.color} text-black font-bold text-sm`}>
                          {hero.rank}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-yellow-300 font-semibold">{hero.name}</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{hero.role}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-3 py-1 bg-yellow-600 text-black rounded-full text-xs font-bold">
                          {hero.tier}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Side Info */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-lg p-6 text-black">
              <p className="text-sm font-bold uppercase opacity-80">Meta Hiện Tại</p>
              <h3 className="text-3xl font-bold mt-2">Tank Meta</h3>
              <p className="text-sm mt-4 opacity-90">Tank đang thống trị meta hiện tại</p>
            </div>
            <div className="bg-slate-900 border border-yellow-600 rounded-lg p-6">
              <p className="text-yellow-400 text-sm font-bold uppercase">Cập Nhật Mới Nhất</p>
              <h3 className="text-xl font-bold text-white mt-2">Bản 1.15</h3>
              <p className="text-gray-400 text-sm mt-2">Các thay đổi cân bằng mới được phát hành</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
