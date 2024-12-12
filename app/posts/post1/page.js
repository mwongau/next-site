import Link from 'next/link';

export default function Page() {
  return (
    <>
	  <p><Link href="/"> Home </Link> | 
	  <Link href="/posts"> Posts selection </Link></p> 
	  <h3>Title: Creation of site</h3>
	  <p>Date: 13-12-2024</p>
	  <p>This site was created on 13-12-2024.</p>
    </>
  );
}