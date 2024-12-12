import Link from 'next/link';

export default function Page() {
  return (
    <>
      <p><Link href="/"> Home </Link> |
	  <Link href="/posts"> Posts selection </Link></p>  	
	  <h2>Blog of M Wong</h2>
      
	  <p>Select and click post title:</p>
	  <p><Link href="/posts/post1">Creation of blog</Link></p>
      <p><Link href="/posts/post2">About this site</Link></p>
	 
    </>
  );
}