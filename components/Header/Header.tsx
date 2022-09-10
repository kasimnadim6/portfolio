import styles from './Header.module.scss';
import Head from 'next/head';
import { SiPaloaltosoftware } from 'react-icons/si';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fall, fallItem } from '../../animations/animations';

interface Props {
  mobile_isHeaderCollapsed: boolean;
  mobile_setIsHeaderCollapsed: () => any;
}

const Header = ({
  mobile_isHeaderCollapsed,
  mobile_setIsHeaderCollapsed,
}: Props) => {
  const [scroll, setScroll] = useState({
    curScroll: 0,
    prevScroll: 0,
    direction: '',
    prevDirection: '',
  });
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    setScroll((prev) => ({
      ...prev,
      prevScroll: window.scrollY || document.documentElement.scrollTop,
    }));
    window.addEventListener('scroll', () => {
      setScroll((prev) => ({
        ...prev,
        curScroll: window.scrollY || document.documentElement.scrollTop,
        direction: prev.curScroll > prev.prevScroll ? 'down' : 'up',
      }));
      if (scroll.direction !== scroll.prevDirection) {
        if (scroll.direction === 'down' && scroll.curScroll > 60) {
          setHideHeader(true);
          setScroll((prev) => ({
            ...prev,
            prevDirection: scroll.direction,
          }));
        } else {
          if (scroll.direction === 'up') {
            setHideHeader(false);
            setScroll((prev) => ({
              ...prev,
              prevDirection: scroll.direction,
            }));
          }
        }
      }
      setScroll((prev) => ({
        ...prev,
        prevScroll: scroll.curScroll,
      }));
    });
  }, [scroll.curScroll, scroll.direction, scroll.prevDirection]);

  const navigationHandler = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    mobile_setIsHeaderCollapsed();
    const target = e.target.textContent + '';
    document.getElementById(target?.toLocaleLowerCase())?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <header
      className={`${styles.header} ${
        scroll.curScroll > 50 ? styles.shadow : ''
      } ${hideHeader ? styles['hide-header'] : ''} ${
        mobile_isHeaderCollapsed
          ? styles['mobile-header-collapsed']
          : styles['mobile-header-opened']
      }`}
    >
      <Head>
        <title>Mahammad Kasim Nadim</title>
        <meta name="description" content="Mahammad Kasim Nadim Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        variants={fall}
        initial="initial"
        animate="animate"
        className={`${styles['logo-box-container']}`}
      >
        <motion.div
          variants={fallItem}
          className="d-flex align-items-center gap-2"
        >
          <SiPaloaltosoftware className={styles['icon-logo']} />
          <span className={`${styles.logo}`}>Kasim Nadim</span>
        </motion.div>
        {mobile_isHeaderCollapsed && (
          <button
            className={styles.menu}
            onClick={() => mobile_setIsHeaderCollapsed()}
          >
            <BiMenuAltRight />
          </button>
        )}
      </motion.div>

      <nav className={`${styles['nav-links']}`}>
        <motion.ul
          variants={fall}
          initial="initial"
          // whileHover="hover"
          animate="animate"
        >
          <motion.li variants={fallItem} onClick={navigationHandler}>
            <a href="#">About</a>
          </motion.li>
          {/* <motion.li variants={fallItem} onClick={navigationHandler}>
            <a href="#">Experience</a>
          </motion.li> */}
          <motion.li variants={fallItem} onClick={navigationHandler}>
            <a href="#">Work</a>
          </motion.li>
          {/* <motion.li variants={fallItem} onClick={navigationHandler}>
            <a href="#">Experiments</a>
          </motion.li> */}
          <motion.li variants={fallItem} onClick={navigationHandler}>
            <a href="#">Contact</a>
          </motion.li>
        </motion.ul>
      </nav>
      {!mobile_isHeaderCollapsed && (
        <button
          className={styles.close}
          onClick={() => mobile_setIsHeaderCollapsed()}
        >
          <AiOutlineCloseCircle />
        </button>
      )}
    </header>
  );
};

export default Header;
