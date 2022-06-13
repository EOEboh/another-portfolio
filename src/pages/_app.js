import Theme from '../styles/theme';
import {  QueryClient, QueryClientProvider, useQuery } from 'react-query';
import 'aos/dist/aos.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Theme>
        <Component {...pageProps} />
      </Theme>
   </QueryClientProvider>
    </>
  );
}
 