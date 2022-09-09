import styles from './Technologies.module.scss';
import Image from 'next/image';
import html from '../../public/icons/html-icon.svg';
import css from '../../public/icons/css-icon.svg';
import javascript from '../../public/icons/javascript-icon.svg';
import typescript from '../../public/icons/typescript-icon.svg';
import angular from '../../public/icons/angular-icon.svg';
import react from '../../public/icons/react-js-icon.svg';
import next from '../../public/icons/next-js-icon.svg';
import node from '../../public/icons/node-js-icon.svg';

const Technologies = () => {
  return (
    <div className={styles.technologies}>
      <div className={styles.heading}>
        <h2>Technologies</h2>
      </div>
      <div className={styles['tech-icons']}>
        <div className={styles.container}>
          <div className={`${styles.icon} ${styles.html}`}>
            <Image src={html} alt="HTML" layout="responsive" />
          </div>
          <p className={styles.caption}>HTML</p>
        </div>
        <div className={styles.container}>
          <div className={`${styles.icon} ${styles.css}`}>
            <Image src={css} alt="CSS" layout="responsive" />
          </div>
          <p className={styles.caption}>CSS</p>
        </div>
        <div className={styles.container}>
          <div className={`${styles.icon} ${styles.javascript}`}>
            <Image src={javascript} alt="Javascript" layout="responsive" />
          </div>
          <p className={styles.caption}>Javascript</p>
        </div>
        <div className={styles.container}>
          <div className={`${styles.icon} ${styles.typescript}`}>
            <Image src={typescript} alt="Typescript" layout="responsive" />
          </div>
          <p className={styles.caption}>Typescript</p>
        </div>
        <div className={styles.container}>
          <div className={`${styles.icon} ${styles.react}`}>
            <Image src={react} alt="React" layout="responsive" />
          </div>
          <p className={styles.caption}>ReactJS</p>
        </div>
        <div className={styles.container}>
          <div className={`${styles.icon} ${styles.angular}`}>
            <Image src={angular} alt="Angular" layout="responsive" />
          </div>
          <p className={styles.caption}>Angular</p>
        </div>
        <div className={styles.container}>
          <div className={`${styles.icon} ${styles.next}`}>
            <Image src={next} alt="NextJS" layout="responsive" />
          </div>
          <p className={styles.caption}>NextJS</p>
        </div>
        <div className={styles.container}>
          <div className={`${styles.icon} ${styles.node}`}>
            <Image src={node} alt="NodeJS" layout="responsive" />
          </div>
          <p className={styles.caption}>NodeJS</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
