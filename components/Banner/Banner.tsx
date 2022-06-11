import styles from './Banner.module.scss';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { motion } from 'framer-motion';
import { arrowMovement, rightToLeftFlow } from '../../animations/animations';
import { FaCode } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className={styles['banner']}>
      <div className={styles['about']}>
        <div className={styles.circle}>
          <div className={styles.role} id="role">
            Front-end Developer
          </div>
          <FaCode className={styles['icon-code']} />
        </div>
        <div className={styles['intro-container']}>
          <span className={styles['tag--1']}>Hi, My name is</span>
          <h1 className={styles.name}>Mahammad Kasim Nadim.</h1>
          <h2 className={`${styles['tag--2']} text-background-clip`}>
            I build things for the{' '}
            <motion.span
              variants={rightToLeftFlow}
              initial="initial"
              animate="animate"
              className={styles.web}
            >
              Web.
            </motion.span>
          </h2>
          <div className={`${styles['tag--3']}`}>
            I’m a Front-End Web developer based in Mangalore specializing in
            building (and occasionally designing) exceptional digital
            experiences and I Love to Code.
          </div>
          <button className={styles['text-me']}>
            Text Me
            <motion.span
              variants={arrowMovement}
              initial="initial"
              animate="animate"
            >
              <MdOutlineDoubleArrow size={18} />
            </motion.span>
            {/* <CgArrowLongRight size={24} /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
