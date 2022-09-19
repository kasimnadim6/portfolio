import styles from './Contact.module.scss';
import React from 'react';
import Button from '../Shared/Button';

const Contact = () => {
  const whatsAppMe = () => {
    window.open('https://wa.me/+918861321329', '_blank');
  };
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles['bg-shape-wrap']}>
        <div className={styles['circle-shape__4']}></div>
        <div className={styles['circle-shape__3']}></div>
        <div className={styles['circle-shape__2']}></div>
        <div className={styles['circle-shape__1']}></div>
        <div className={styles['circle-shape__0']}></div>
      </div>
      <span className={styles['sub-heading']}>{`What's next ?`}</span>
      <span className={styles['heading']}>Get In Touch</span>
      <span
        className={styles['message']}
      >{`Dropping a line to say g’day, or you have a question or just want to say hi or see if we can build something amazing together? I’d love to hear from you!`}</span>
      <Button onClick={whatsAppMe} className="btn--connect-me">
        Contact Me
      </Button>
    </section>
  );
};

export default Contact;
