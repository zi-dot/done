export default ({ app, store, redirect }) => {
  app.router.beforeEach(async (to, from, next) => {
    const pathWithoutAuth = ['/', '/login'];
    if (pathWithoutAuth.includes(to.path)) {
      return next();
    }
    const isLoggedIn = await store.dispatch('user/googleCheckLoggedIn');
    if (!store.getters['user/isAuthenticated']) {
      if (!isLoggedIn && to.path.indexOf('/app') !== -1) {
        return next('/');
      }
      return next();
    } else {
      next();
    }
  });
};
