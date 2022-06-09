import styles from './LatestWorks.module.scss';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { RiArrowDropRightFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import { appear, glowingText } from '../../animations/animations';

const LatestWorks = () => {
  const projects = [
    {
      id: '1',
      backGroundImage: 'Wildlife.png',
      projectName: 'Wild Nature',
      description: `It's tour planner website.`,
      usedTechnology: ['HTML5', 'CSS3'],
      gitHubLink: 'https://github.com/kasimnadim6/Natours',
      websiteLink: 'https://wildnature.netlify.app',
    },
    {
      id: '2',
      backGroundImage: 'NetflixClone.png',
      projectName: 'Netflix Clone',
      description: `It's a clone of Netflix.`,
      usedTechnology: [
        'ReactJS',
        'HTML5',
        'CSS3',
        'SASS',
        'Strip: for payment',
        `Firebase`,
      ],
      gitHubLink: 'https://github.com/kasimnadim6/netflix',
      websiteLink: 'https://netflix-de158.firebaseapp.com/',
    },
    {
      id: '3',
      backGroundImage: 'FlightService.png',
      projectName: 'Flight Management',
      description: `It's a flight managing app. where you login as staff/admin and do some cool stuff.`,
      usedTechnology: ['Angular', 'HTML5', 'CSS3'],
      gitHubLink: 'https://github.com/kasimnadim6/flightService',
      websiteLink: 'https://flightsvc.netlify.app',
    },
  ];
  return (
    <section className={styles.works}>
      <h2 className={styles.heading}>Latest Works</h2>
      <ul className={styles['container']}>
        {projects.map((project) => (
          <motion.li
            key={project.id}
            className={styles['project']}
            style={{
              background: `url(${project.backGroundImage}) center center`,
              backgroundSize: 'cover',
            }}
            data-index={`0${project.id}`.slice(-2)}
            variants={appear}
            initial="initial"
            animate="animate"
          >
            <div className={styles['project__info']}>
              <h2 className={styles['title']}>{project.projectName}</h2>
              <h4 className={styles['description']}>{project.description}</h4>
              <div className={styles['technology-used']}>
                <p>Used Technologies are</p>
                <ul>
                  {project.usedTechnology?.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              <ul
                className={styles['explore-links']}
                //   variants={glowingText}
                //   initial="initial"
                //   animate="animate"
              >
                <li>
                  <a href={project.gitHubLink} target="_blank" rel="noreferrer">
                    <FaGithub
                      className={`${styles.icon} ${styles['icon-gitHub']}`}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <HiExternalLink
                      className={`${styles.icon} ${styles['icon-Website']}`}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.shadow}></div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default LatestWorks;
