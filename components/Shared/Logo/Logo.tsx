import styles from './Logo.module.scss';
import { SiPaloaltosoftware } from 'react-icons/si';

const Logo = () => {
  return (
    <>
      <div className={`${styles['logo-container']}`}>
        <svg width="0" height="0">
          <linearGradient
            id="blue-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#3dd875" offset="23%" />
            <stop stopColor="#0eb3a0" offset="87%" />
          </linearGradient>
        </svg>
        <SiPaloaltosoftware
          className={styles['icon-logo']}
          style={{ fill: 'url(#blue-gradient)' }}
        />
        <span className={`${styles.logo}`}>Kasim Nadim</span>
      </div>
    </>
  );
};

export default Logo;
