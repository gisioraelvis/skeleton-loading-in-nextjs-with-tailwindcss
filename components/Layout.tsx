import Link from 'next/link'
import { Footer } from './Footer'
import { Meta } from './Meta'

export const Layout = ({ children }: any) => {
  return (
    <>
      <Meta />
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        {children}
      </div>
      <Footer />
    </>
  )
}
