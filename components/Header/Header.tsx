import styles from './Header.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { BsLinkedin, BsWhatsapp, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

const Header = () => {
  return (
    <header className={styles.header}>
      <Head>
        <title>Mahammad Kasim Nadim</title>
        <meta name="description" content="Mahammad Kasim Nadim Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src={logo} alt="Logo" width={70} height={70} />
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
