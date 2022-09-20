import styles from './Footer.module.scss';
import { SiLinkedin, SiWhatsapp, SiGmail, SiGithub } from 'react-icons/si';
import Logo from '../Shared/Logo/Logo';
interface Props {
  mobile_isHeaderCollapsed: boolean;
}

const Footer = ({ mobile_isHeaderCollapsed }: Props) => {
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
      {!mobile_isHeaderCollapsed && (
        <div className={styles['black-overlap-screen']}></div>
      )}
      <div className={styles['footer__container']}>
        <Logo />
        <ul className={styles['connect-me']}>
          <li>
            <a href="#" onClick={(e) => showProfileHandler(e, 'linkedin')}>
              <SiLinkedin />
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => showProfileHandler(e, 'whatsapp')}>
              <SiWhatsapp />
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => showProfileHandler(e, 'gmail')}>
              <SiGmail />
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => showProfileHandler(e, 'github')}>
              <SiGithub />
            </a>
          </li>
        </ul>
      </div>
      <span className={styles.copyright}>
        Designed and Built by Mahammad Kasim Nadim &#169;{' '}
        {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
