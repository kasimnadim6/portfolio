export const fall = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: {
      type: 'spring',
      mass: 1,
      damping: 10,
      stiffness: 200,
      staggerChildren: 0.2,
    },
  },
};

export const linkVariants = {
  y: '-0.3rem',
};

export const arrowMovement = {
  initial: { x: 0, opacity: 1 },
  animate: {
    x: 20,
    opacity: 0,
    transition: {
      repeat: Infinity,
      duration: 1.5,
    },
  },
};
export const rightToLeftFlow = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 150,
    },
  },
};
export const appear = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1,
    },
  },
};
