import styles from './Footer.module.scss';

const Footer = () => {
  const showProfileHandler = (
    e: React.MouseEvent<HTMLAnchorElement>,
    profile: string
  ) => {
    e.preventDefault();
    switch (profile) {
      case 'linkedin':
        window.open('https://linkedin.com/in/iamkasimnadim', '_blank');
        break;
      case 'whatsapp':
        window.open('https://wa.me/8861321329', '_blank');
        break;
      case 'gmail':
        window.open(
          'mailto:kasimnadim6@gmail.com?subject=Hey there!',
          '_blank'
        );
        break;
      case 'github':
        window.open('https://github.com/kasimnadim6', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles['footer__container']}>
        <span className={styles.logo}>Kasim</span>
        <ul className={styles['connect-me']}>
          <li>
            <a href="#" onClick={(e) => showProfileHandler(e, 'linkedin')}>
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => showProfileHandler(e, 'whatsapp')}>
              WhatsApp
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => showProfileHandler(e, 'gmail')}>
              Gmail
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => showProfileHandler(e, 'github')}>
              Github
            </a>
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
