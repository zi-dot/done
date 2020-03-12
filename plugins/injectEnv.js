export default ctx => {
  console.log('ctx injection');
  for (let k in ctx.app.$env) {
    if (!process.env[k]) {
      process.env[k] = ctx.app.$env[k];
    }
  }
  console.log('finish injection');
};
