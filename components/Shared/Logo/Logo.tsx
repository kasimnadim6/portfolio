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
            <stop stopColor="#982ff7" offset="20%" />
            <stop stopColor="#524add" offset="56%" />
            <stop stopColor="#6668eb" offset="84%" />
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
