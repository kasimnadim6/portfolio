import styles from './Banner.module.scss';
import Image from 'next/image';
import profile from '../../public/sub.jpg';
import { useEffect, useState } from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { motion } from 'framer-motion';
import {
  appear,
  arrowMovement,
  fall,
  rightToLeftFlow,
} from '../../animations/animations';

const Banner = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  useEffect(() => {
    let text = document.getElementById('role');
    if (text != undefined) {
      text.innerHTML = text.innerText
        .split('')
        .map(
          (char, i) =>
            `<span style="transform:rotate(${(i + 1) * 9.5}deg)">${char}</span>`
        )
        .join('');
    }
    // hover animation on profile
    const container = document.getElementById('profile');
    const card = document.getElementById('profile__pic');
    container?.addEventListener('mousemove', (e) => {
      const xAxis = (container.clientWidth / 2 - e.pageX) / 15;
      const yAxis = (container.clientHeight / 2 - e.pageY) / 15;
      card!.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    container?.addEventListener('mouseenter', () => setMouseEnter(true));
    container?.addEventListener('mouseleave', () => setMouseEnter(false));
  }, []);
  return (
    <div className={styles['banner']}>
      <div className={styles['profile']} id="profile">
        <motion.div
          variants={appear}
          initial="initial"
          animate="animate"
          className={`${styles['profile__pic']} ${
            mouseEnter ? styles['mouse-enter'] : styles['mouse-leave']
          }`}
          id="profile__pic"
        >
          <motion.div variants={appear} className={styles.name}>
            <span>Mahammad Kasim</span>
          </motion.div>
          <motion.div variants={appear} className={styles.experience}>
            <span className={styles['experience-year']}>4</span>
            <span>Years Of Experience</span>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles['about']}>
        <div className={styles.circle}>
          <div className={styles.role} id="role">
            Front-end Developer
          </div>
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
