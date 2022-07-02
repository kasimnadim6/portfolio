import styles from './Header.module.scss';
import Head from 'next/head';
import { SiCoderwall } from 'react-icons/si';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CgMenuHotdog } from 'react-icons/cg';
import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { fall, fallItem, linkVariants } from '../../animations/animations';

const Header = () => {
  const [mobile_isHeaderCollapsed, mobile_setIsHeaderCollapsed] =
    useState(true);
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
    mobile_setIsHeaderCollapsed((val) => !val);
    const target = e.target.textContent + '';
    document.getElementById(target?.toLocaleLowerCase())?.scrollIntoView({
      behavior: 'smooth',
      // block: 'center',
      // inline: 'center',
    });
  };

  return (
    <header
      className={`${styles.header} ${
        scroll.curScroll > 50 ? styles.shadow : ''
      } ${hideHeader ? styles['hide-header'] : ''} ${
        mobile_isHeaderCollapsed ? styles['mobile-header-collapsed'] : ''
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
        className={styles['logo-box']}
      >
        <motion.div variants={fallItem}>
          <SiCoderwall className={styles['icon-logo']} />
          <span className={styles.logo}>Kasim</span>
        </motion.div>
        {mobile_isHeaderCollapsed && (
          <button
            className={styles.menu}
            onClick={() => mobile_setIsHeaderCollapsed((val) => !val)}
          >
            <CgMenuHotdog />
          </button>
        )}
      </motion.div>

      <nav className={styles['nav-links']}>
        <motion.ul
          variants={fall}
          initial="initial"
          // whileHover="hover"
          animate="animate"
        >
          <motion.li variants={fallItem} onClick={navigationHandler}>
            <a href="#">About</a>
          </motion.li>
          <motion.li variants={fallItem} onClick={navigationHandler}>
            <a href="#">Experience</a>
          </motion.li>
          <motion.li variants={fallItem} onClick={navigationHandler}>
            <a href="#">Work</a>
          </motion.li>
          <motion.li variants={fallItem} onClick={navigationHandler}>
            <a href="#">Experiments</a>
          </motion.li>
          <motion.li variants={fallItem} onClick={navigationHandler}>
            <a href="#">Contact</a>
          </motion.li>
        </motion.ul>
      </nav>
      {!mobile_isHeaderCollapsed && (
        <button
          className={styles.close}
          onClick={() => mobile_setIsHeaderCollapsed((val) => !val)}
        >
          <AiOutlineCloseCircle />
        </button>
      )}
      {/* <div className={styles['social-icons']}>
        <ul>
          <li>
            <a href="#">
              <BsLinkedin
                className={`${styles.icon} ${styles['icon-linkedIn']}`}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <BsWhatsapp
                className={`${styles.icon} ${styles['icon-whatsApp']}`}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <SiGmail className={`${styles.icon} ${styles['icon-gmail']}`} />
            </a>
          </li>
          <li>
            <a href="#">
              <BsGithub className={`${styles.icon} ${styles['icon-github']}`} />
            </a>
          </li>
        </ul>
      </div> */}
    </header>
  );
};

export default Header;
