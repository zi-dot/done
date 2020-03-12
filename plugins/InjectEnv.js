export default ctx => {
  for (let k in ctx.app.$env) {
    if (!process.env[k]) {
      process.env[k] = ctx.app.$env[k];
    }
  }
};
