import Link from 'next/link';

export default function Page() {
  return (
    <>
	  <p><Link href="/"> Home </Link> | 
	  <Link href="/posts"> Posts selection </Link></p> 
      <br />
	  <h3>Title: About this site</h3>
	  <p>Date: 25-5-2023</p>
	  <p>This is the personal site of M Wong. It is implemented by using next.js, React, 
	  HTML and CSS.</p>
	  <p>This site is hosted by GitHub Pages</p>
    </>
  );
}