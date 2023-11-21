
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/features/layout/Footer'
import SideNav from '@/components/features/layout/Sidebar'
import MarginWidthWrapper from '@/components/features/layout/Margin-width-wrapper'
import HeaderMobile from '@/components/features/layout/Header-mobile'
import PageWrapper from '@/components/features/layout/Page-wrapper'
import Header from '@/components/features/layout/Header'
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { supabase } from '@/lib/supabase'
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
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  
  const { data } = await supabase.auth.getSession();

  console.log("supabase session", session)
  console.log("supabase user", user)
  console.log("supabase data", data)
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
