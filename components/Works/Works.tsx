import styles from './Works.module.scss';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { glowingText } from '../../animations/animations';

const Works = () => {
  return (
    <section className={styles.works}>
      <h2 className={styles.heading}>Latest Works</h2>
      <ul className={styles['container']}>
        <li className={styles['project']} data-index="01">
          <div className={styles['project__info']}>
            <h2 className={styles['title']}>Project Title</h2>
            <h4 className={styles['description']}>
              here comes short description about the project mentioned above.
            </h4>
            <motion.ul
              className={styles['explore-links']}
              variants={glowingText}
              initial="initial"
              animate="animate"
            >
              <li>
                <a href="#">
                  <FaGithub
                    className={`${styles.icon} ${styles['icon-github']}`}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <HiExternalLink
                    className={`${styles.icon} ${styles['icon-link']}`}
                  />
                </a>
              </li>
            </motion.ul>
          </div>
          <div className={styles.shadow}></div>
        </li>
      </ul>
    </section>
  );
};

export default Works;
