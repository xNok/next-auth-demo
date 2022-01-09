import { useUser, UserButton } from "@clerk/nextjs";

export default function Profile() {

  const { firstName } = useUser();

  return (
  	<>
    	<style jsx>{`
        	.container {
            	max-width: 65rem;
            	margin: 1.5rem auto;
            	padding-left: 1rem;
            	padding-right: 1rem;
        	}
    	`}

    	</style>
    	<div className="container">
        	<header>
            	{/* Mount the UserButton component */}
            	<UserButton />
        	</header>
        	<main>Hello, {firstName}!</main>
    	</div>
  	</>
 
  );
}
