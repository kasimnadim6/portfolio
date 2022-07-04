import styles from './About.module.scss';
import { motion } from 'framer-motion';
import { appear } from '../../animations/animations';
import { useEffect, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaAngular, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';
import { isDesktop } from 'react-device-detect';

const About = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  useEffect(() => {
    const card = document.getElementById('card');
    /* Get the height and width of the element */
    const height = card?.clientHeight || 0;
    const width = card?.clientWidth || 0;

    function handleMouseMove(e: any) {
      /* Store the x and y position */
      const xVal = e.layerX;
      const yVal = e.layerY;
      /*
       * Calculate rotation value along the Y-axis
       * Here the multiplier 20 is to Control the rotation
       */
      const yRotation = 20 * ((xVal - width / 2) / width);
      /* Calculate the rotation along the X-axis */
      const xRotation = -20 * ((yVal - height / 2) / height);
      /* Generate string for CSS transform property */
      const transformCSS =
        'perspective(500px) rotateX(' +
        xRotation +
        'deg) rotateY(' +
        yRotation +
        'deg)';

      /* Apply the calculated transformation */
      card!.style.transform = transformCSS;
    }
    if (isDesktop) {
      card?.addEventListener('mousemove', handleMouseMove);
      card?.addEventListener('mouseout', function () {
        card!.style.transform = 'perspective(500px) rotateX(0) rotateY(0)';
      });
      card?.addEventListener('mouseenter', () => setMouseEnter(true));
      card?.addEventListener('mouseleave', () => setMouseEnter(false));
    }
  }, []);

  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>
      <div className={`flex-column flex-lg-row ${styles.container}`}>
        <div className={styles['about-me']}>
          <p>
            Hey! My name is Mahammad Kasim Nadim and I enjoy creating things
            that live on the internet. My interest in web development started
            back in 2016 when I decided to learn HTML, CSS, Javascript from{' '}
            <a
              href="https://www.w3schools.com/"
              rel="noreferrer"
              target="_blank"
            >
              w3schools.
            </a>
          </p>
          <p>
            Fast-forward to today, I&apos;am an Ex Mindtree Mind and currently
            working for Cognizant . I&apos;ve had the privilege of working in
            real time project from scratch which gave me a big picture in
            overall development process.
          </p>
          <p>
            I don&apos;t like to define myself by the work I&apos;ve done. I
            define myself by the work I want to do. Skills can be taught,
            personality is inherent. I prefer to keep learning, continue
            challenging myself, and do interesting things that matter.
          </p>
          <div className={styles['known-technologies']}>
            <h3 className={styles['sub-heading']}>
              Here are a few technologies I&apos;ve been working with recently:
            </h3>
            <ul>
              <li>
                <span>
                  <FaHtml5 className={styles.icon} />
                  HTML5
                </span>
              </li>
              <li>
                <span>
                  <FaCss3Alt className={styles.icon} />
                  CSS3
                </span>
              </li>
              <li>
                <span>
                  <IoLogoJavascript className={styles.icon} />
                  Javascript
                </span>
              </li>
              <li>
                <span>
                  <FaAngular className={styles.icon} />
                  Angular
                </span>
              </li>
              <li>
                <span>
                  <FaReact className={styles.icon} />
                  ReactJS
                </span>
              </li>
              <li>
                <span>
                  <SiTypescript className={styles.icon} />
                  Typescript
                </span>
              </li>
              <li>
                <span>
                  <SiNextdotjs className={styles.icon} />
                  NextJS
                </span>
              </li>
            </ul>
          </div>
        </div>
        <motion.div
          variants={appear}
          initial="initial"
          animate="animate"
          id="card"
          className={`${styles.card} ${
            mouseEnter ? styles['mouse-enter'] : styles['mouse-leave']
          }`}
        >
          <div id="photo" className={styles.photo}>
            <motion.div variants={appear} className={styles.name}>
              <span>Mahammad Kasim</span>
            </motion.div>
            <motion.div variants={appear} className={styles.experience}>
              <span className={styles['experience-year']}>4</span>
              <span>Years Of Experience</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
