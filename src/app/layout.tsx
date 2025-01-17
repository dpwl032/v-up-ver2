import type { Metadata } from 'next'
import { NextAuthProvider } from './NextAuthProvider'
import './globals.css'
import QueryProvider from './provider'
import { FontClassNames } from '@/util/font'
import Container from '@/components/common/Container'

export const metadata: Metadata = {
  title: 'V-UP',
  description:
    '퍼스널 뮤직 검사를 통해 나의 취향에 맞는 음악을 추천받고 음악을 들으며 음악 커뮤니티를 즐길 수 있는 서비스 입니다.',
  openGraph: {
    title: 'V-UP',
    description:
      '퍼스널 뮤직 검사를 통해 나의 취향에 맞는 음악을 추천받고 음악을 들으며 음악 커뮤니티를 즐길 수 있는 서비스 입니다.',
    // url: 'https://nextjs.org', //배포되면 주소 추가
    siteName: 'V-UP',
    images: [
      {
        url: '/images/shareLogo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <QueryProvider>
      <html lang='ko'>
        <body className={FontClassNames}>
          <NextAuthProvider>
            <Container>{children}</Container>
          </NextAuthProvider>
        </body>
      </html>
    </QueryProvider>
  )
}
