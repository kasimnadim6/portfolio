import styles from './Header.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { BsLinkedin, BsWhatsapp, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { useEffect, useState } from 'react';

const Header = () => {
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
      }));
      setScroll((prev) => ({
        ...prev,
        direction: prev.curScroll > prev.prevScroll ? 'down' : 'up',
      }));
      if (scroll.direction !== scroll.prevDirection) {
        if (scroll.direction === 'down' && scroll.curScroll > 50) {
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

  return (
    <header
      className={`${styles.header} ${scroll.curScroll > 50 && styles.shadow} ${
        hideHeader && styles['hide-header']
      }`}
    >
      <Head>
        <title>Mahammad Kasim Nadim</title>
        <meta name="description" content="Mahammad Kasim Nadim Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Image src={logo} alt="Logo" width={100} height={100} /> */}
      <span className={styles.logo}>Kasim</span>
      <nav className={styles['nav-links']}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
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
