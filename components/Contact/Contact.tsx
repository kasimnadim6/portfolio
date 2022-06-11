import styles from './Contact.module.scss';
import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { arrowMovement } from '../../animations/animations';
import Button from '../Shared/Button';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <span className={styles['sub-heading']}>{`What's next ?`}</span>
      <span className={styles['heading']}>Get In Touch</span>
      <span
        className={styles['message']}
      >{`Dropping a line to say g’day, or you have a question or just want to say hi or see if we can build something amazing together? I’d love to hear from you!`}</span>
      <Button>Contact Me</Button>
    </section>
  );
};

export default Contact;
