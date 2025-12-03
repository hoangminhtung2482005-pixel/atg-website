'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HeroesPage() {
  const heroes = [
    {
      id: 1,
      name: 'Allain',
      role: 'Chiến Binh',
      tier: 'S',
      winRate: '54.2%',
      pickRate: '8.3%',
      banRate: '12.5%',
      difficulty: 'Dễ',
      description: 'Chiến binh tấn công mạnh, khả năng hôn nhân cao'
    },
    {
      id: 2,
      name: 'Elandorr',
      role: 'Cung Thủ',
      tier: 'S',
      winRate: '53.8%',
      pickRate: '7.9%',
      banRate: '15.2%',
      difficulty: 'Khó',
      description: 'ADC chính với sát thương cao, cần kỹ năng cao'
    },
    {
      id: 3,
      name: 'Florentino',
      role: 'Sát Thủ',
      tier: 'A',
      winRate: '52.1%',
      pickRate: '6.5%',
      banRate: '18.7%',
      difficulty: 'Rất Khó',
      description: 'Sát thủ du cận cơ động, burst damage cao'
    },
    {
      id: 4,
      name: 'Veera',
      role: 'Hỗ Trợ',
      tier: 'A',
      winRate: '51.9%',
      pickRate: '5.2%',
      banRate: '8.3%',
      difficulty: 'Trung Bình',
      description: 'Support kiểm soát, hỗ trợ đội với CC mạnh'
    },
    {
      id: 5,
      name: 'Veres',
      role: 'Tháp Rơi',
      tier: 'A',
      winRate: '50.5%',
      pickRate: '6.8%',
      banRate: '10.1%',
      difficulty: 'Trung Bình',
      description: 'Tháp rơi đa năng, dễ gây tác động'
    },
    {
      id: 6,
      name: 'Lorion',
      role: 'Pháp Sư',
      tier: 'B',
      winRate: '49.3%',
      pickRate: '4.1%',
      banRate: '5.5%',
      difficulty: 'Khó',
      description: 'Pháp sư AOE mạnh, cần vị trí tốt'
    }
  ];

  const getTierColor = (tier: string) => {
    const colors: Record<string, string> = {
      S: 'bg-red-600/20 text-red-400 border-red-600/50',
      A: 'bg-orange-600/20 text-orange-400 border-orange-600/50',
      B: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/50',
      C: 'bg-blue-600/20 text-blue-400 border-blue-600/50'
    };
    return colors[tier] || colors['C'];
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp">
              Danh Sách Nhân Vật
            </h1>
            <p className="text-xl text-yellow-400/80 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Bảng xếp hạng tân trang nhân vật - Cập nhật meta hôm nay
            </p>
          </div>

          {/* Stats Header */}
          <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-600/30 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-yellow-400 font-semibold">Tổng Nhân Vật</p>
                <p className="text-3xl font-bold text-white mt-2">87+</p>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold">Nhân Vật S Tier</p>
                <p className="text-3xl font-bold text-white mt-2">12</p>
              </div>
              <div>
                <p className="text-yellow-400 font-semibold">Cập Nhật Gần Nhất</p>
                <p className="text-3xl font-bold text-white mt-2">15/11/24</p>
              </div>
            </div>
          </div>

          {/* Heroes Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-yellow-600/30">
                  <th className="px-4 py-3 text-left text-yellow-400 font-semibold">Nhân Vật</th>
                  <th className="px-4 py-3 text-center text-yellow-400 font-semibold">Vị Trí</th>
                  <th className="px-4 py-3 text-center text-yellow-400 font-semibold">Tier</th>
                  <th className="px-4 py-3 text-center text-yellow-400 font-semibold">Win Rate</th>
                  <th className="px-4 py-3 text-center text-yellow-400 font-semibold">Pick Rate</th>
                  <th className="px-4 py-3 text-center text-yellow-400 font-semibold">Ban Rate</th>
                  <th className="px-4 py-3 text-center text-yellow-400 font-semibold">Độ Khó</th>
                </tr>
              </thead>
              <tbody>
                {heroes.map((hero, idx) => (
                  <tr
                    key={hero.id}
                    className="border-b border-slate-800 hover:bg-slate-800/50 transition duration-200"
                  >
                    <td className="px-4 py-4 font-semibold text-white">{hero.name}</td>
                    <td className="px-4 py-4 text-center text-slate-300 text-sm">{hero.role}</td>
                    <td className="px-4 py-4 text-center">
                      <span className={`px-3 py-1 rounded border ${getTierColor(hero.tier)} font-bold`}>
                        {hero.tier}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center text-green-400 font-semibold">{hero.winRate}</td>
                    <td className="px-4 py-4 text-center text-blue-400 font-semibold">{hero.pickRate}</td>
                    <td className="px-4 py-4 text-center text-red-400 font-semibold">{hero.banRate}</td>
                    <td className="px-4 py-4 text-center text-yellow-400 text-sm">{hero.difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Description Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {heroes.map((hero) => (
              <div
                key={`desc-${hero.id}`}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border border-yellow-600/30"
              >
                <h3 className="text-lg font-bold text-yellow-400 mb-2">{hero.name}</h3>
                <p className="text-slate-300 text-sm">{hero.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
