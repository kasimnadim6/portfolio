import styles from './Button.module.scss';
import { motion } from 'framer-motion';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { arrowMovement } from '../../animations/animations';
import { ReactNode } from 'react';

interface Props {
  className: string;
  children?: ReactNode;
  onClick?: () => any;
}
const Button = ({ children, onClick, className }: Props) => {
  console.log(className);
  return (
    <button className={`${styles.btn} ${styles[className]}`} onClick={onClick}>
      {children}
      <motion.span variants={arrowMovement} initial="initial" animate="animate">
        <MdOutlineDoubleArrow size={16} />
      </motion.span>
    </button>
  );
};

export default Button;
