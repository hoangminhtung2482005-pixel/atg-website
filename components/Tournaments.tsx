'use client'

export default function Tournaments() {
  const tournaments = [
    { id: 1, name: 'Thang Hàng Tuần', prize: '$500', status: 'Đang Diễn Ra', icon: '🎮' },
    { id: 2, name: 'Giải Vô Địch Hàng Tháng', prize: '$5000', status: 'Sắp Diễn Ra', icon: '🏆' },
    { id: 3, name: 'Chung Kết Mùa Giải Lớn', prize: '$50000', status: 'Sắp Diễn Ra', icon: '👑' },
  ]

  return (
    <section id="tournaments" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12 uppercase">Giải Đấu</h2>

        <div className="space-y-4">
          {tournaments.map((tournament) => (
            <div key={tournament.id} className="bg-slate-900 border border-yellow-600 hover:border-yellow-400 rounded-lg p-6 flex items-center justify-between transition">
              <div className="flex items-center gap-6">
                <span className="text-4xl">{tournament.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-yellow-300">{tournament.name}</h3>
                  <p className="text-gray-400 text-sm">Giải Thưởng: {tournament.prize}</p>
                </div>
              </div>
              <button className={`px-6 py-2 rounded font-bold uppercase text-sm transition ${
                tournament.status === 'Đang Diễn Ra'
                  ? 'bg-yellow-600 hover:bg-yellow-500 text-black'
                  : 'bg-gray-600 hover:bg-gray-500 text-white'
              }`}>
                {tournament.status}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-8 py-3 rounded font-bold uppercase transition">
            Xem Tất Cả Giải Đấu
          </button>
        </div>
      </div>
    </section>
  )
}
