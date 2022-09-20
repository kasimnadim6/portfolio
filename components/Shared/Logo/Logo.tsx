import styles from './Logo.module.scss';
import { SiPaloaltosoftware } from 'react-icons/si';

interface Props {
  mobile_isHeaderCollapsed?: boolean;
}

const Logo = ({ mobile_isHeaderCollapsed = true }: Props) => {
  console.table(!mobile_isHeaderCollapsed);
  return (
    <div
      className={`${
        !mobile_isHeaderCollapsed ? styles['mobile-header-opened'] : ''
      }`}
    >
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
    </div>
  );
};

export default Logo;
