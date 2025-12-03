// SEO Configuration
export const seoConfig = {
  baseUrl: 'https://lien-quan-7vyuno6tb-hoang-minh-tungs-projects.vercel.app',
  title: 'ATG - Chiến Thuật & Hướng Dẫn Arena of Valor',
  description: 'Trang web tổng hợp hướng dẫn, tier list, bảng xếp hạng và tin tức về Liên Quân Mobile (Arena of Valor). Cộng đồng Game Masters Việt Nam.',
  keywords: 'Liên Quân Mobile, Arena of Valor, Hướng Dẫn, Build, Tier List, Guides, AoV, Game, Esports',
  image: '/logo.svg',
  
  pages: {
    home: {
      title: 'ATG - Chiến Thuật & Hướng Dẫn Arena of Valor',
      description: 'Trang chủ - Cộng đồng Game Masters tổng hợp hướng dẫn, tier list, rankings Liên Quân Mobile.',
      url: '/'
    },
    guides: {
      title: 'Hướng Dẫn Chi Tiết - ATG',
      description: 'Hướng dẫn chi tiết về cách chơi, build, combo kỹ năng, farm strategy trong Liên Quân Mobile.',
      url: '/guides'
    },
    heroes: {
      title: 'Danh Sách Nhân Vật - Tier List | ATG',
      description: 'Bảng xếp hạng nhân vật mới nhất, tier list, win rate, pick rate, build tối ưu cho từng hero.',
      url: '/heroes'
    },
    rankings: {
      title: 'Bảng Xếp Hạng Toàn Cầu - Leaderboard | ATG',
      description: 'Top Game Masters trên VN Server, thống kê ELO, win rate, main hero của top players.',
      url: '/rankings'
    },
    news: {
      title: 'Tin Tức & Cập Nhật - ATG',
      description: 'Tin tức mới nhất, phân tích patch, phỏng vấn pro players, chiến lược game của cộng đồng.',
      url: '/news'
    }
  },

  // Open Graph configuration
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    twitter: {
      card: 'summary_large_image',
      site: '@atg_guides',
      creator: '@atg_guides'
    }
  },

  // Structured data (JSON-LD)
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ATG - Chiến Thuật & Hướng Dẫn Arena of Valor',
    url: 'https://lien-quan-7vyuno6tb-hoang-minh-tungs-projects.vercel.app',
    description: 'Trang web tổng hợp hướng dẫn, tier list, bảng xếp hạng và tin tức về Liên Quân Mobile.',
    inLanguage: 'vi',
    author: {
      '@type': 'Organization',
      name: 'ATG Community'
    }
  }
};

export const generateMetadata = (page: keyof typeof seoConfig.pages) => {
  const pageConfig = seoConfig.pages[page];
  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: seoConfig.keywords,
    openGraph: {
      title: pageConfig.title,
      description: pageConfig.description,
      url: seoConfig.baseUrl + pageConfig.url,
      images: [{ url: seoConfig.baseUrl + seoConfig.image }],
      type: 'website',
      locale: 'vi_VN'
    },
    twitter: {
      card: 'summary_large_image',
      title: pageConfig.title,
      description: pageConfig.description,
      images: [seoConfig.baseUrl + seoConfig.image]
    }
  };
};
