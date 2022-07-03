import styles from './Experience.module.scss';
import Image from 'next/image';
import mindtreeLogo from '../../public/mindtree-logo.png';
import cognizantLogo from '../../public/cognizant-logo.png';

const Experience = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.heading}>{`Where I've Worked`}</h2>
      <div
        className={`d-flex align-items-center justify-content-around ${styles.companies}`}
      >
        <div>
          <Image
            alt="mindtree-logo"
            className={styles.logo}
            src={mindtreeLogo}
            layout="responsive"
          />
          <h2>Mindtree</h2>
        </div>
        <div>
          <Image
            alt="cognizant-logo"
            className={styles.logo}
            src={cognizantLogo}
            layout="responsive"
            width={200}
            height={200}
          />
          <h2>Cognizant</h2>
        </div>
      </div>
    </section>
  );
};

export default Experience;
