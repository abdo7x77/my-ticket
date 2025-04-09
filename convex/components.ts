export const components = {
  rateLimiter: {
    queueJoin: {
      kind: "fixed window",
      rate: 3, // 3 joins allowed
      period: 30 * 60 * 1000, // in 30 minutes
    },
  },
};
