import styles from './Experience.module.scss';
import Image from 'next/image';
import mindtreeLogo from '../../public/mindtree-logo.png';
import cognizantLogo from '../../public/cognizant-logo.png';
import { CSSProperties } from 'react';

const Experience = () => {
  const events = [
    {
      title: 'SDM Institute Of Technology',
      timeline: {
        startDate: 'Aug 2014',
        endDate: 'July 2018',
      },
      logo: '/sdmit-logo.png',
      timelineLinkHeight: '4.8rem',
      details: {
        position: 'Graduated',
        description: `Graduated as a Software Engineer from SDMIT. `,
      },
    },
    {
      title: 'Mindtree Ltd',
      timeline: {
        startDate: 'Oct 2018',
        endDate: 'Aug 2020',
      },
      logo: '/mindtree-logo.png',
      timelineLinkHeight: '10.2rem',
      details: {
        position: 'Senior Software Engineer',
        description: `Experienced in core web technologies i.e HTML, CSS & JavaScript.
        Also, Exposure to cloud infrastructure, such as Azure, GCP & AWS.
        Exposed to development of REST API’s using NodeJS, Express JS & MongoDB as DB.`,
      },
    },
    {
      title: 'Cognizant Technology Solutions',
      timeline: {
        startDate: 'Aug 2020',
        endDate: 'Current',
      },
      logo: '/cognizant-logo.png',
      timelineLinkHeight: '7.2rem',
      details: {
        position: 'Associate',
        description: `I am working as Front End Developer and Developed React components invoking REST services.
        Experienced with popular ReactJS workflows like Redux.
        Explore and design dynamic and compelling consumer experiences.`,
      },
    },
  ];
  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.heading}>{`Where I've Worked`}</h2>
      <div className="w-100 py-3 pl-1">
        {events.map((event) => (
          <div className={styles.timeline} key={event.title}>
            <div className={styles.timeline__heading}>
              <h3>{event.title}</h3>
              <span>
                {event.timeline.startDate} - {event.timeline.endDate}
              </span>
            </div>
            <div className={styles.timeline__point}>
              <div
                className={styles['timeline__point-logo']}
                style={{ '--bg': `url(${event.logo})` } as CSSProperties}
              ></div>
              <div
                className={styles.hr}
                style={
                  {
                    '--timelineLinkHeight': event.timelineLinkHeight,
                  } as CSSProperties
                }
              ></div>
            </div>
            <div className={styles.timeline__details}>
              <h3>{event.details.position}</h3>
              <p>{event.details.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
