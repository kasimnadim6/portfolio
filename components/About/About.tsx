import styles from './About.module.scss';

const About = () => {
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
        </div>
      </div>
    </section>
  );
};

export default About;
