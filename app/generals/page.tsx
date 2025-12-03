'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface General {
  id: number;
  name: string;
  role: string;
  winRate: number;
  pickRate: number;
  banRate: number;
  score: number;
  tier: string;
  difficulty: string;
}

const calculateScore = (win: number, pick: number, ban: number, total: number = 10000): number => {
  // Công thức: Score = (Win - 50)*3.5 + (Pick - 1000/Total)*1.5 + (Ban - 600/Total)
  const winScore = (win - 50) * 3.5;
  const pickScore = (pick - (1000 / total)) * 1.5;
  const banScore = ban - (600 / total);
  return Number((winScore + pickScore + banScore).toFixed(2));
};

const getTier = (score: number): string => {
  if (score >= 150) return 'S';
  if (score >= 100) return 'A';
  if (score >= 50) return 'B';
  if (score >= 0) return 'C';
  return 'D';
};

export default function GeneralsPage() {
  const [generals, setGenerals] = useState<General[]>([
    {
      id: 1,
      name: 'Allain',
      role: 'Chiến Binh',
      winRate: 54.2,
      pickRate: 8.3,
      banRate: 12.5,
      score: 0,
      tier: '',
      difficulty: 'Dễ'
    },
    {
      id: 2,
      name: 'Elandorr',
      role: 'Cung Thủ',
      winRate: 53.8,
      pickRate: 7.9,
      banRate: 15.2,
      score: 0,
      tier: '',
      difficulty: 'Khó'
    },
    {
      id: 3,
      name: 'Florentino',
      role: 'Sát Thủ',
      winRate: 52.1,
      pickRate: 6.5,
      banRate: 18.7,
      score: 0,
      tier: '',
      difficulty: 'Rất Khó'
    },
    {
      id: 4,
      name: 'Veera',
      role: 'Hỗ Trợ',
      winRate: 51.9,
      pickRate: 5.2,
      banRate: 8.3,
      score: 0,
      tier: '',
      difficulty: 'Trung Bình'
    },
    {
      id: 5,
      name: 'Veres',
      role: 'Tháp Rơi',
      winRate: 50.5,
      pickRate: 6.8,
      banRate: 10.1,
      score: 0,
      tier: '',
      difficulty: 'Trung Bình'
    },
    {
      id: 6,
      name: 'Lorion',
      role: 'Pháp Sư',
      winRate: 49.3,
      pickRate: 4.1,
      banRate: 5.5,
      score: 0,
      tier: '',
      difficulty: 'Khó'
    }
  ]);

  const [newGeneral, setNewGeneral] = useState({
    name: '',
    role: '',
    winRate: '',
    pickRate: '',
    banRate: ''
  });

  const [sortColumn, setSortColumn] = useState<keyof General>('score');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const calculateAll = () => {
    const updated = generals.map(g => {
      const score = calculateScore(g.winRate, g.pickRate, g.banRate);
      const tier = getTier(score);
      return { ...g, score, tier };
    });
    setGenerals(updated.sort((a, b) => b.score - a.score));
  };

  const addGeneral = () => {
    if (!newGeneral.name || !newGeneral.winRate) {
      alert('Vui lòng nhập Tên Tướng và Win Rate');
      return;
    }

    const score = calculateScore(
      parseFloat(newGeneral.winRate),
      parseFloat(newGeneral.pickRate) || 0,
      parseFloat(newGeneral.banRate) || 0
    );
    const tier = getTier(score);

    const general: General = {
      id: generals.length + 1,
      name: newGeneral.name,
      role: newGeneral.role,
      winRate: parseFloat(newGeneral.winRate),
      pickRate: parseFloat(newGeneral.pickRate) || 0,
      banRate: parseFloat(newGeneral.banRate) || 0,
      score,
      tier,
      difficulty: 'Trung Bình'
    };

    setGenerals([...generals, general].sort((a, b) => b.score - a.score));
    setNewGeneral({ name: '', role: '', winRate: '', pickRate: '', banRate: '' });
  };

  const handleSort = (column: keyof General) => {
    const newOrder = sortColumn === column && sortOrder === 'desc' ? 'asc' : 'desc';
    setSortColumn(column);
    setSortOrder(newOrder);

    const sorted = [...generals].sort((a, b) => {
      const aVal = a[column];
      const bVal = b[column];
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return newOrder === 'desc' ? bVal - aVal : aVal - bVal;
      }
      return 0;
    });
    setGenerals(sorted);
  };

  const getTierColor = (tier: string) => {
    const colors: Record<string, string> = {
      S: 'bg-red-600/20 text-red-400 border-red-600/50',
      A: 'bg-orange-600/20 text-orange-400 border-orange-600/50',
      B: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/50',
      C: 'bg-blue-600/20 text-blue-400 border-blue-600/50',
      D: 'bg-slate-600/20 text-slate-400 border-slate-600/50'
    };
    return colors[tier] || colors['D'];
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeInUp">
              Tier List Tướng
            </h1>
            <p className="text-xl text-yellow-400/80 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              Bảng xếp hạng tướng dựa trên dữ liệu Win Rate, Pick Rate, Ban Rate
            </p>
          </div>

          {/* Calculator Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* Add New General */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-yellow-600/30">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">Thêm Tướng Mới</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Tên Tướng"
                  value={newGeneral.name}
                  onChange={(e) => setNewGeneral({...newGeneral, name: e.target.value})}
                  className="w-full px-4 py-2 bg-slate-700 text-white rounded border border-yellow-600/30 focus:border-yellow-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Vị Trí (VD: Chiến Binh, Sát Thủ)"
                  value={newGeneral.role}
                  onChange={(e) => setNewGeneral({...newGeneral, role: e.target.value})}
                  className="w-full px-4 py-2 bg-slate-700 text-white rounded border border-yellow-600/30 focus:border-yellow-400 focus:outline-none"
                />
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="number"
                    placeholder="Win %"
                    value={newGeneral.winRate}
                    onChange={(e) => setNewGeneral({...newGeneral, winRate: e.target.value})}
                    className="px-4 py-2 bg-slate-700 text-white rounded border border-yellow-600/30 focus:border-yellow-400 focus:outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Pick %"
                    value={newGeneral.pickRate}
                    onChange={(e) => setNewGeneral({...newGeneral, pickRate: e.target.value})}
                    className="px-4 py-2 bg-slate-700 text-white rounded border border-yellow-600/30 focus:border-yellow-400 focus:outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Ban %"
                    value={newGeneral.banRate}
                    onChange={(e) => setNewGeneral({...newGeneral, banRate: e.target.value})}
                    className="px-4 py-2 bg-slate-700 text-white rounded border border-yellow-600/30 focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <button
                  onClick={addGeneral}
                  className="w-full px-6 py-2 bg-yellow-600 hover:bg-yellow-500 text-slate-950 font-bold rounded transition duration-300"
                >
                  Thêm Tướng
                </button>
              </div>
            </div>

            {/* Formula Info */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-yellow-600/30">
              <h2 className="text-xl font-bold text-yellow-400 mb-4">Công Thức Tính Score</h2>
              <div className="space-y-3 text-slate-300 text-sm font-mono">
                <p className="bg-slate-700/50 p-3 rounded">
                  <span className="text-yellow-400">Score =</span><br/>
                  (Win - 50) × 3.5 +<br/>
                  (Pick - 10) × 1.5 +<br/>
                  (Ban - 6)
                </p>
                <div className="border-t border-yellow-600/30 pt-3">
                  <p className="text-yellow-400 font-bold mb-2">Tier Score:</p>
                  <p>S ≥ 150</p>
                  <p>A ≥ 100</p>
                  <p>B ≥ 50</p>
                  <p>C ≥ 0</p>
                  <p>D &lt; 0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="text-center mb-8">
            <button
              onClick={calculateAll}
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-600/50 transition duration-300 transform hover:scale-105"
            >
              Tính Toán Lại
            </button>
          </div>

          {/* Generals Table */}
          <div className="bg-slate-800/30 rounded-xl border border-yellow-600/30 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-yellow-600/10 border-b border-yellow-600/30">
                    <th className="px-6 py-4 text-left text-yellow-400 font-semibold cursor-pointer hover:text-yellow-300" onClick={() => handleSort('name')}>
                      Tên Tướng {sortColumn === 'name' && (sortOrder === 'desc' ? '↓' : '↑')}
                    </th>
                    <th className="px-6 py-4 text-center text-yellow-400 font-semibold cursor-pointer hover:text-yellow-300" onClick={() => handleSort('role')}>
                      Vị Trí {sortColumn === 'role' && (sortOrder === 'desc' ? '↓' : '↑')}
                    </th>
                    <th className="px-6 py-4 text-center text-yellow-400 font-semibold cursor-pointer hover:text-yellow-300" onClick={() => handleSort('winRate')}>
                      Win % {sortColumn === 'winRate' && (sortOrder === 'desc' ? '↓' : '↑')}
                    </th>
                    <th className="px-6 py-4 text-center text-yellow-400 font-semibold cursor-pointer hover:text-yellow-300" onClick={() => handleSort('pickRate')}>
                      Pick % {sortColumn === 'pickRate' && (sortOrder === 'desc' ? '↓' : '↑')}
                    </th>
                    <th className="px-6 py-4 text-center text-yellow-400 font-semibold cursor-pointer hover:text-yellow-300" onClick={() => handleSort('banRate')}>
                      Ban % {sortColumn === 'banRate' && (sortOrder === 'desc' ? '↓' : '↑')}
                    </th>
                    <th className="px-6 py-4 text-center text-yellow-400 font-semibold cursor-pointer hover:text-yellow-300" onClick={() => handleSort('score')}>
                      Score {sortColumn === 'score' && (sortOrder === 'desc' ? '↓' : '↑')}
                    </th>
                    <th className="px-6 py-4 text-center text-yellow-400 font-semibold cursor-pointer hover:text-yellow-300" onClick={() => handleSort('tier')}>
                      Tier {sortColumn === 'tier' && (sortOrder === 'desc' ? '↓' : '↑')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {generals.map((general) => (
                    <tr
                      key={general.id}
                      className="border-b border-slate-700/50 hover:bg-slate-700/30 transition duration-200"
                    >
                      <td className="px-6 py-4 font-semibold text-white">{general.name}</td>
                      <td className="px-6 py-4 text-center text-slate-300 text-sm">{general.role}</td>
                      <td className="px-6 py-4 text-center text-green-400 font-semibold">{general.winRate.toFixed(1)}%</td>
                      <td className="px-6 py-4 text-center text-blue-400 font-semibold">{general.pickRate.toFixed(1)}%</td>
                      <td className="px-6 py-4 text-center text-red-400 font-semibold">{general.banRate.toFixed(1)}%</td>
                      <td className="px-6 py-4 text-center text-yellow-300 font-bold">{general.score.toFixed(2)}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-3 py-1 rounded border font-bold ${getTierColor(general.tier)}`}>
                          {general.tier}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tier Legend */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {['S', 'A', 'B', 'C', 'D'].map((tier) => (
              <div key={tier} className={`rounded-lg p-4 text-center border ${getTierColor(tier)}`}>
                <span className="text-xl font-bold">{tier}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
