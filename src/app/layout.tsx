import './globals.css'
import {cbRg, cbLt, cbTh} from "../components/fonts"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${cbLt.variable} ${cbRg.variable} ${cbTh.variable}`}>{children}</body>
    </html>
  )
}
