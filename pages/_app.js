import '../styles/globals.css';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import { useRouter } from 'next/router';

const publicPages = ["/"];

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  const isPublicPage = publicPages.includes(pathname);

  return (
	<ClerkProvider>
  	{isPublicPage ? (
    	<Component {...pageProps} />
  	) : (
    	<>
      	<SignedIn>
        	<Component {...pageProps} />
      	</SignedIn>
      	<SignedOut>
        	<RedirectToSignIn redirectUrl={pathname} />
      	</SignedOut>
    	</>
  	)}
	</ClerkProvider>
  );
}

export default MyApp;
