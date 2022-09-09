import styles from './Banner.module.scss';
import { motion } from 'framer-motion';
import { appear } from '../../animations/animations';
import Button from '../Shared/Button';

const Banner = () => {
  const whatsAppMe = () => {
    window.open('https://wa.me/+918861321329', '_blank');
  };
  return (
    <motion.div
      id="banner"
      variants={appear}
      initial="initial"
      animate="animate"
      className={styles.banner}
    >
      <div className={styles['about']}>
        <span className={styles['tag--1']}>Hi, My name is</span>
        <h1 className={styles.name}>Mahammad Kasim Nadim.</h1>
        <h2 className={`${styles['tag--2']} text-background-clip`}>
          I build things for the <span className={styles.web}>{`{Web}`}</span>
        </h2>
        <div className={`${styles['tag--3']}`}>
          I’m a Front-End Web developer based in Mangalore specializing in
          building (and occasionally designing) exceptional digital experiences
          and I Love to Code.
        </div>
        <Button onClick={whatsAppMe} className="btn--text-me">
          Text Me
        </Button>
      </div>
    </motion.div>
  );
};

export default Banner;
