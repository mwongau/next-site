import Link from 'next/link';

export default function Page() {
  return (
    <>
	  <p><Link href="/"> Home </Link> | 
	  <Link href="/posts"> Posts selection </Link></p> 
	  <h3>Title: Creation of blog</h3>
	  <p>Date: 25-5-2023</p>
	  <p>This blog was created on 25-5-2023.</p>
    </>
  );
}