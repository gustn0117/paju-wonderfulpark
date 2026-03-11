import './globals.css';
import { Inter, Noto_Sans_KR } from 'next/font/google';
import ScrollAnimator from '@/components/ScrollAnimator';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-noto',
});

export const metadata = {
  title: '파주원더풀파크',
  description: '캠프하우즈 도시개발사업 첫 수혜단지, 파주 원더풀파크',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${notoSansKR.variable}`}>
        {children}
        <ScrollAnimator />
      </body>
    </html>
  );
}
