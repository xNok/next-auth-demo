import { useSession, signIn, signOut } from "next-auth/react"
import styles from "../styles/Home.module.css"

export default function Profile() {
  const { data: session } = useSession()
  if (session) {
	return (
  	<div className={styles.title}>
    	Signed in as {session.user.email} <br />
    	<button onClick={() => signOut()}>Sign out</button>
  	</div>
	)
  }
  return (
	<div className={styles.title}>
  	Not signed in <br />
  	<button onClick={() => signIn()}>Sign in</button>
	</div>
  )
}
