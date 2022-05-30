import Theme from '../styles/theme';
import {  QueryClient, QueryClientProvider, useQuery } from 'react-query';

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
 