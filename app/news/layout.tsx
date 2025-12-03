import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata('news');

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
