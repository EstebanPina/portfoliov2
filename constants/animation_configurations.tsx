export const container_title = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.5 * i },
  }),
};

// Variants for each word.

export const child_title = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: -40,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const container_subtitle = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.5 * i },
  }),
};

// Variants for each word.

export const child_subtitle = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 40,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};