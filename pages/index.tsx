import type { NextPage } from 'next';
import Image from 'next/image';
import Header from '../components/Header/Header';
import styles from './Home.module.scss';
import { CgShapeHalfCircle } from 'react-icons/cg';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import { AnimatePresence } from 'framer-motion';
import About from '../components/About/About';

const Home: NextPage = () => {
  return (
    <AnimatePresence>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          {/* <span className={styles.icon}>
            <CgShapeHalfCircle />
          </span> */}
          <Banner />
          <About />
        </main>

        {/* <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer> */}
      </div>
      <Footer />
    </AnimatePresence>
  );
};

export default Home;
