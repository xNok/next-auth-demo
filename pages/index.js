import styles from "../styles/Home.module.css";
import Link from 'next/link';

export default function Home() {

  return (
	<div className={styles.container}>
  	<main className={styles.title}>
    	<h1>Welcome</h1>
    	<Link href="/profile">
      	<a>Go to your Profile</a>
    	</Link>
  	</main>
	</div>
  );
}
