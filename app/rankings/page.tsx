'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RankingsPage() {
  const rankings = [
    {
      rank: 1,
      playerName: 'Tuấn Anh Gaming',
      elo: 3850,
      wins: 452,
      losses: 156,
      mainHero: 'Allain',
      region: 'VN Server'
    },
    {
      rank: 2,
      playerName: 'Pro Minh Vương',
      elo: 3780,
      wins: 428,
      losses: 172,
      mainHero: 'Elandorr',
      region: 'VN Server'
    },
    {
      rank: 3,
      playerName: 'Florentino Master',
      elo: 3720,
      wins: 415,
      losses: 185,
      mainHero: 'Florentino',
      region: 'VN Server'
    },
    {
      rank: 4,
      playerName: 'Veera Support',
      elo: 3680,
      wins: 398,
      losses: 192,
      mainHero: 'Veera',
      region: 'VN Server'
    },
    {
      rank: 5,
      playerName: 'Veres Warrior',
      elo: 3640,
      wins: 385,
      losses: 204,
      mainHero: 'Veres',
      region: 'VN Server'
    },
    {
      rank: 6,
      playerName: 'Lorion Mage',
      elo: 3580,
      wins: 372,
      losses: 218,
      mainHero: 'Lorion',
      region: 'VN Server'
    },
    {
      rank: 7,
      playerName: 'Dragon Slayer',
      elo: 3520,
      wins: 358,
      losses: 232,
      mainHero: 'Allain',
      region: 'VN Server'
    },
    {
      rank: 8,
      playerName: 'Cung Thủ Pro',
      elo: 3480,
      wins: 345,
      losses: 245,
      mainHero: 'Elandorr',
      region: 'VN Server'
    },
    {
      rank: 9,
      playerName: 'Ninja Master',
      elo: 3420,
      wins: 332,
      losses: 258,
      mainHero: 'Florentino',
      region: 'VN Server'
    },
    {
      rank: 10,
      playerName: 'Tank King',
      elo: 3380,
      wins: 319,
      losses: 271,
      mainHero: 'Veres',
      region: 'VN Server'
    }
  ];

  const getMedalEmoji = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp">
              Bảng Xếp Hạng Toàn Cầu
            </h1>
            <p className="text-xl text-yellow-400/80 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Top 10 Game Masters trên VN Server
            </p>
          </div>

          {/* Leaderboard Stats */}
          <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-600/30 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-yellow-400 font-semibold">Tổng Người Chơi</p>
                <p className="text-3xl font-bold text-white mt-2">50K+</p>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold">Top 1 ELO</p>
                <p className="text-3xl font-bold text-white mt-2">3850</p>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold">Win Rate Trung Bình</p>
                <p className="text-3xl font-bold text-white mt-2">65.2%</p>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold">Cập Nhật</p>
                <p className="text-3xl font-bold text-white mt-2">Hôm Nay</p>
              </div>
            </div>
          </div>

          {/* Top 3 Highlighted */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {rankings.slice(0, 3).map((player) => (
              <div
                key={player.rank}
                className={`rounded-xl p-6 border-2 transition duration-300 ${
                  player.rank === 1
                    ? 'bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border-yellow-500 shadow-lg shadow-yellow-600/30'
                    : player.rank === 2
                    ? 'bg-gradient-to-br from-slate-600/20 to-slate-700/20 border-slate-400 shadow-lg shadow-slate-600/20'
                    : 'bg-gradient-to-br from-orange-600/20 to-yellow-600/10 border-orange-500 shadow-lg shadow-orange-600/20'
                }`}
              >
                <div className="text-5xl font-bold mb-2">{getMedalEmoji(player.rank)}</div>
                <h3 className="text-2xl font-bold text-white mb-1">{player.playerName}</h3>
                <p className="text-yellow-400 font-semibold text-lg mb-3">{player.elo} ELO</p>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>🎯 Main: <span className="text-yellow-400">{player.mainHero}</span></p>
                  <p>✅ Thắng: {player.wins}</p>
                  <p>❌ Thua: {player.losses}</p>
                  <p>📊 Win Rate: {((player.wins / (player.wins + player.losses)) * 100).toFixed(1)}%</p>
                </div>
              </div>
            ))}
          </div>

          {/* Full Rankings Table */}
          <div className="bg-slate-800/30 rounded-xl border border-yellow-600/30 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-yellow-600/10 border-b border-yellow-600/30">
                    <th className="px-6 py-4 text-left text-yellow-400 font-semibold">Rank</th>
                    <th className="px-6 py-4 text-left text-yellow-400 font-semibold">Tên Người Chơi</th>
                    <th className="px-6 py-4 text-center text-yellow-400 font-semibold">ELO</th>
                    <th className="px-6 py-4 text-center text-yellow-400 font-semibold">Thắng / Thua</th>
                    <th className="px-6 py-4 text-center text-yellow-400 font-semibold">Main Hero</th>
                    <th className="px-6 py-4 text-center text-yellow-400 font-semibold">Region</th>
                  </tr>
                </thead>
                <tbody>
                  {rankings.map((player) => (
                    <tr
                      key={player.rank}
                      className="border-b border-slate-700/50 hover:bg-slate-700/30 transition duration-200"
                    >
                      <td className="px-6 py-4">
                        <span className={`text-lg font-bold ${
                          player.rank <= 3 ? 'text-yellow-400' : 'text-slate-400'
                        }`}>
                          {getMedalEmoji(player.rank)}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-white">{player.playerName}</td>
                      <td className="px-6 py-4 text-center text-yellow-400 font-bold">{player.elo}</td>
                      <td className="px-6 py-4 text-center text-slate-300">
                        <span className="text-green-400">{player.wins}W</span> / <span className="text-red-400">{player.losses}L</span>
                      </td>
                      <td className="px-6 py-4 text-center text-yellow-300">{player.mainHero}</td>
                      <td className="px-6 py-4 text-center text-slate-400 text-sm">{player.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Bạn Sẵn Sàng Chinh Phục Bảng Xếp Hạng?</h2>
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-600/50 transition duration-300 transform hover:scale-105">
              Tham Gia Ngay
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
