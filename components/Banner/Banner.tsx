import styles from './Banner.module.scss';
import Image from 'next/image';
import profile from '../../public/sub.jpg';
import { useEffect } from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import { MdOutlineDoubleArrow } from 'react-icons/md';

const Banner = () => {
  useEffect(() => {
    let text = document.getElementById('role');
    if (text != undefined) {
      text.innerHTML = text.innerText
        .split('')
        .map(
          (char, i) =>
            `<span style="transform:rotate(${(i + 1) * 9.5}deg)">${char}</span>`
        )
        .join('');
    }
  }, []);
  return (
    <div className={styles['banner']}>
      <div className={styles['profile']}>
        <div className={styles['profile__pic']}>
          {/* <Image
          src={profile}
          alt="profile"
          //   width={400}
          //   height={400}
          layout="fixed"

        /> */}
          <div className={styles.name}>
            <span>Mahammad Kasim</span>
          </div>
          <div className={styles.experience}>
            <span className={styles['experience-year']}>4</span>
            <span>Years Of Experience</span>
          </div>
        </div>
      </div>

      <div className={styles['about']}>
        <div className={styles.circle}></div>
        <div className={styles.role} id="role">
          Front-end Developer
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
            experiences. Love to Code.
          </div>
          <button className={styles['text-me']}>
            Text Me
            <MdOutlineDoubleArrow size={18} />
            {/* <CgArrowLongRight size={24} /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
