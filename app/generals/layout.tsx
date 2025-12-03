import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tier List Tướng - ATG',
  description: 'Bảng xếp hạng tướng động với công thức tính Score dựa trên Win Rate, Pick Rate, Ban Rate. Cập nhật meta game mới nhất.',
  keywords: 'Tier List, Tướng, Arena of Valor, Liên Quân Mobile, Bảng Xếp Hạng',
  openGraph: {
    title: 'Tier List Tướng - ATG',
    description: 'Bảng xếp hạng tướng động với công thức tính Score',
    url: '/generals',
  }
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
