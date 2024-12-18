import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import styles from './page.module.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "M Wong",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
	    <div className={styles.header}>
        <h1> M Wong</h1>
	    <h3>My personal site</h3>
	    <br />
	    </div>
		<div className={styles.nav}>
		<Link href= '/'>Home</Link> | <Link href='/posts'>Blog</Link>
		</div>
        {children}
      </body>
    </html>
  );
}
