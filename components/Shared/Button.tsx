import styles from './Button.module.scss';
import { motion } from 'framer-motion';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { arrowMovement } from '../../animations/animations';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  onClick?: () => any;
}
const Button = ({ children, onClick }: Props) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
      <motion.span variants={arrowMovement} initial="initial" animate="animate">
        <MdOutlineDoubleArrow size={18} />
      </motion.span>
    </button>
  );
};

export default Button;
