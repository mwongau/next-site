import styles from './page.module.css'
import Link from 'next/link';

export default function Page() {
  return (
    <div>    
	  <div className={styles.header}>
      <h1> M Wong</h1>
	  <h3>My personal blog</h3>
	  <br />
	  </div>
	  <div>
	  <br />
	  <p><Link href="/posts"> Go to blog </Link></p> 
      
	  <h2>Home</h2>	  
	  
	  <p>Welcome to my personal blog. I am a researcher in computer vision and machine learning 
	  with Ph.D in Computer Science, M.Sc and B.Sc(Hons.) in Electronic Engineering. I am also 
	  interested in web app development. This site is built by using Next.js, JavaScript, 
	  HTML and CSS. This site is hosted by GitHub Pages.</p>
	  
	  <p className={styles.footer}>This site might use cookies to improve the browsing experience of users. If you 
	  continue to use this site, it will be assumed that you agree to the use of cookies.</p> 
      </div>
    </div>
  );
}


