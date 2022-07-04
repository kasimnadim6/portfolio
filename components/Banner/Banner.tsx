import styles from './Banner.module.scss';
import { motion } from 'framer-motion';
import { appear } from '../../animations/animations';
import { FaCode } from 'react-icons/fa';
import Button from '../Shared/Button';
import { useEffect } from 'react';

const Banner = () => {
  const whatsAppMe = () => {
    window.open('https://wa.me/+918861321329', '_blank');
  };
  useEffect(() => {
    let text = document.getElementById('role');
    if (text != undefined) {
      text.innerHTML = text.innerText
        .split('')
        .map(
          (char, i) =>
            `<span style="transform:rotate(${(i + 1) * 18}deg)">${char}</span>`
        )
        .join('');
    }
  });
  return (
    <motion.div
      id="banner"
      variants={appear}
      initial="initial"
      animate="animate"
      className={styles.banner}
    >
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
            I build things for the <span className={styles.web}>Web.</span>
          </h2>
          <div className={`${styles['tag--3']}`}>
            I’m a Front-End Web developer based in Mangalore specializing in
            building (and occasionally designing) exceptional digital
            experiences and I Love to Code.
          </div>
          <Button onClick={whatsAppMe}>Text Me</Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
