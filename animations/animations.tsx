export const circularMotion = {
  hidden: { opacity: 0 },
  visible: {
    rotate: 90,
    opacity: 0,
    transition: {
      repeat: Infinity,
      type: 'tween',
      duration: 10,
    },
  },
};

export const bounce = {
  hidden: { y: 70 },
  visible: {
    y: 0,
    transition: {
      repeat: Infinity,
      type: 'spring',
      stiffness: 100,
      duration: 3,
    },
  },
};
