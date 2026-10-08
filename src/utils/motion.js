export const easeOutCubic = [0.22, 1, 0.36, 1]

export const springSoft = {
  type: 'spring',
  stiffness: 120,
  damping: 18,
  mass: 0.8,
}

export const transitionBase = {
  duration: 0.6,
  ease: easeOutCubic,
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
}

export const revealUp = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
}

export const revealLeft = {
  hidden: {
    opacity: 0,
    x: -28,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
  },
}

export const revealRight = {
  hidden: {
    opacity: 0,
    x: 28,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
  },
}

export const revealDown = {
  hidden: {
    opacity: 0,
    y: -28,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
}

export const heroTitle = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.98,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
  },
}

export const cardRise = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
}

export const softButton = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: '0 0 0 rgba(229, 37, 42, 0)',
  },
  hover: {
    y: -2,
    scale: 1.01,
    boxShadow: '0 12px 28px rgba(229, 37, 42, 0.18)',
  },
  tap: {
    y: 0,
    scale: 0.985,
  },
}

export const navItem = {
  hidden: {
    opacity: 0,
    y: -8,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}
