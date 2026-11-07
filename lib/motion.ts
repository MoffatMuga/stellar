export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.7, ease: "easeOut" as const },
  }),
};

export const viewport = { once: false, amount: 0.2 };