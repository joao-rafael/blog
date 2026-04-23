import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [transitionStage, setTransitionStage] = useState<'idle' | 'exiting' | 'entering'>('entering');

  useEffect(() => {
    const handleStart = () => {
      setTransitionStage('exiting');
    };

    const handleDone = () => {
      setTransitionStage('entering');
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setTransitionStage('idle');
        });
      });
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleDone);
    router.events.on('routeChangeError', handleDone);

    handleDone();

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleDone);
      router.events.off('routeChangeError', handleDone);
    };
  }, [router.events]);

  return (
    <Layout>
      <div className={`pageTransition pageTransition--${transitionStage}`}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
};

export default MyApp;
