import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__container']}>
        <span className={styles.logo}>Kasim</span>
        <ul className={styles['connect-me']}>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">WhatsApp</a>
          </li>
          <li>
            <a href="#">Gmail</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
        </ul>
        <span className={styles.copyright}>
          Designed and Built by Mahammad Kasim Nadim &#169;{' '}
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
