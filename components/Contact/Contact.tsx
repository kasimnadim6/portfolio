import styles from './Contact.module.scss';
import React from 'react';
import Button from '../Shared/Button';

const Contact = () => {
  const whatsAppMe = () => {
    window.open('https://wa.me/+918861321329', '_blank');
  };
  return (
    <section id="contact" className={styles.contact}>
      <span className={styles['sub-heading']}>{`What's next ?`}</span>
      <span className={styles['heading']}>Get In Touch</span>
      <span
        className={styles['message']}
      >{`Dropping a line to say g’day, or you have a question or just want to say hi or see if we can build something amazing together? I’d love to hear from you!`}</span>
      <Button onClick={whatsAppMe}>Contact Me</Button>
    </section>
  );
};

export default Contact;
