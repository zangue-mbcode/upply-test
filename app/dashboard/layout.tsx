

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/features/layout/Footer'
import SideNav from '@/components/features/layout/Sidebar'
import MarginWidthWrapper from '@/components/features/layout/Margin-width-wrapper'
import HeaderMobile from '@/components/features/layout/Header-mobile'
import PageWrapper from '@/components/features/layout/Page-wrapper'
import Header from '@/components/features/layout/Header'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 

  
  return (
    
<div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              <Header />
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
              <Footer />
            </MarginWidthWrapper>
          </main>
        </div>
    
  )
  
}
