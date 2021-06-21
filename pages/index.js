import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Index () {
  return (
    <div>
      <Head>
        <title>โอนไว</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/profile">โปรไฟล์</Link>
        <Link href="/withdraw">ถอนเงินสด</Link>
        <Link href="/deposit">ฝากเข้าบัญชี</Link>
      </main>

      <footer></footer>
    </div>
  )
}
