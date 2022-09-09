import type { NextPage } from 'next';
import Header from '../components/Header/Header';
import styles from './Home.module.scss';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import { AnimatePresence } from 'framer-motion';
import About from '../components/About/About';
import LatestWorks from '../components/LatestWorks/LatestWorks';
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import FunProjects from '../components/FunProjects/FunProjects';
import Technologies from '../components/Technologies/Technologies';

const Home: NextPage = () => {
  const [mobile_isHeaderCollapsed, mobile_setIsHeaderCollapsed] =
    useState(true);
  const mobile_setIsHeaderCollapsedHandler = () => {
    mobile_setIsHeaderCollapsed((val) => !val);
  };
  return (
    <AnimatePresence>
      <Header
        mobile_isHeaderCollapsed={mobile_isHeaderCollapsed}
        mobile_setIsHeaderCollapsed={mobile_setIsHeaderCollapsedHandler}
      />
      <div className={styles.container}>
        {!mobile_isHeaderCollapsed && (
          <div className={styles['black-overlap-screen']}></div>
        )}
        <main className={styles.main}>
          <Banner />
          <Technologies />
          <About />
          {/* <Experience /> */}
          <LatestWorks />
          {/* <FunProjects /> */}
          <Contact />
        </main>
      </div>
      <Footer mobile_isHeaderCollapsed={mobile_isHeaderCollapsed} />
    </AnimatePresence>
  );
};

export default Home;
