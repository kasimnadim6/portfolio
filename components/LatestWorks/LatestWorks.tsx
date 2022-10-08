import styles from './LatestWorks.module.scss';
import Link from 'next/link';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { appear } from '../../animations/animations';
import { FcNext } from 'react-icons/fc';
import { CSSProperties } from 'react';
import Image from 'next/image';
import wildNature from '../../public/Wildlife.png';

const LatestWorks = () => {
  const projects = [
    {
      id: 1,
      numberImage: 'one.svg',
      backGroundImage: 'Wildlife.png',
      // backGroundImage: <Image src={wildNature} />,
      projectName: 'Wild Nature',
      description: `It's tour planner website.
      A Platform That Helps You Discover The Most Intriguing Locations For Your Vacations. Book Hotels And Spa's At A Cheaper Rate`,
      usedTechnology: ['HTML5', 'CSS3'],
      gitHubLink: 'https://github.com/kasimnadim6/Natours',
      websiteLink: 'https://wildnature.netlify.app',
    },
    {
      id: 2,
      numberImage: 'two.svg',
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
      id: 3,
      numberImage: 'three.svg',
      backGroundImage: 'FlightService.png',
      projectName: 'Flight Management',
      description: `It's a flight managing app. where you login as staff/admin and do some cool stuff.`,
      usedTechnology: ['Angular', 'HTML5', 'CSS3'],
      gitHubLink: 'https://github.com/kasimnadim6/flightService',
      websiteLink: 'https://flightsvc.netlify.app',
    },
  ];

  return (
    <section id="work" className={styles.works}>
      <h2 className={styles.heading}>Latest Works</h2>
      <ul className={styles['container']}>
        {projects.map((project) => (
          <li className={styles.project} key={project.id}>
            <div
              className={styles['project-card']}
              style={
                {
                  '--number-image': `url(${project.numberImage})`,
                  '--bg-image': `url(${project.backGroundImage})`,
                } as CSSProperties
              }
            >
              {/* <div className={styles.bg}>{project.backGroundImage}</div> */}
            </div>
            <div className={styles['project-info']}>
              <h2 className={styles['project-info__name']}>
                {project.projectName}
              </h2>
              <p className={styles['project-info__description']}>
                {project.description}
              </p>
              <div className={styles['project-info__technology']}>
                <span>Used Technologies: </span>
                {project.usedTechnology?.map((tech, i) => (
                  <span key={i}>
                    <span>{tech}</span>
                    {i !== project.usedTechnology.length - 1 && <span>, </span>}
                  </span>
                ))}
              </div>
              <div className={styles['project-info__explore-links']}>
                <Link href={project.gitHubLink}>
                  <a target="_blank" rel="noreferrer">
                    <FaGithub
                      size={20}
                      className={`${styles.icon} ${styles['icon-gitHub']}`}
                    />
                  </a>
                </Link>
                <Link href={project.websiteLink}>
                  <a target="_blank" rel="noreferrer">
                    <HiExternalLink
                      size={28}
                      className={`${styles.icon} ${styles['icon-Website']}`}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LatestWorks;
