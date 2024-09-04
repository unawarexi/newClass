export const FadeInUp = {
  initial: { opacity: 0, y: 50 }, // Start with opacity 0 and position below (y: 50)
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Fade in and slide up to original position
  exit: { opacity: 0, y: 50, transition: { duration: 0.5 } }, // Fade out and slide back down
};

export const smoothPopIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
