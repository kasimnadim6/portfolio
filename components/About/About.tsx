import styles from './About.module.scss';
import Image from 'next/image';
import profile from '../../public/1.jpeg';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>
      <div className={`flex-column flex-lg-row ${styles.container}`}>
        <div className={styles['about-me']}>
          <p>
            Hey Stranger! 🙋🏻‍♂️ My name is Mahammad Kasim Nadim. I am a Full Stack
            Developer (Front End Heavy) and I enjoy creating things that live on
            the internet. My interest in web development started back in 2016
            when I decided to learn HTML, CSS, Javascript.
          </p>
          <p>
            Fast-forward to today, I&apos;am an Ex <b>Mindtree Mind</b> and
            currently working for <b>Cognizant</b>. I&apos;ve had the privilege
            of working in real time project from scratch which gave me a big
            picture in overall development process.
          </p>
          <p>
            I don&apos;t like to define myself by the work I&apos;ve done. I
            define myself by the work I want to do. Skills can be taught,
            personality is inherent. I prefer to keep learning, continue
            challenging myself, and do interesting things that matter.
          </p>
        </div>
        <div className={styles['about-bg']}>
          <Image
            className={styles.profile}
            width={170}
            height={170}
            src={profile}
            layout="responsive"
            alt="about background"
            objectFit="cover"
            objectPosition="center center"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
