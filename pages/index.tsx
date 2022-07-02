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

const Home: NextPage = () => {
  return (
    <AnimatePresence>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <Banner />
          <About />
          <Experience />
          <LatestWorks />
          {/* <FunProjects /> */}
          <Contact />
        </main>
      </div>
      <Footer />
    </AnimatePresence>
  );
};

export default Home;
