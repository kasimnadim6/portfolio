import styles from './About.module.scss';
import { FaHtml5, FaCss3Alt, FaAngular, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

const About = () => {
  const technologies = [
    {
      name: 'HTML5',
      icon: <FaHtml5 />,
    },
    {
      name: 'CSS3',
      icon: <FaCss3Alt />,
    },
    {
      name: 'Javascript',
      icon: <IoLogoJavascript />,
    },
    {
      name: 'Typescript',
      icon: <SiTypescript />,
    },
    {
      name: 'Angular',
      icon: <FaAngular />,
    },
    {
      name: 'ReactJS',
      icon: <FaReact />,
    },

    {
      name: 'NextJS',
      icon: <SiNextdotjs />,
    },
  ];
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
              {technologies.map((t) => (
                <li key={t.name}>
                  <span className="d-flex gap-2">
                    {t.icon}
                    {t.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
