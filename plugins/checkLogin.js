import Vue from 'vue';

Vue.mixin({
  methods: {
    async checkLogin() {
      if (!this.$store.getters['user/isAuthenticated']) {
        this.showLoading(true);
        await this.$store.dispatch('user/googleCheckLoggedIn');
        if (this.$store.getters['user/isAuthenticated']) {
          if (this.$route.path.indexOf('/app') === -1) {
            return this.$router.push('/app');
          }
        } else {
          if (this.$route.path !== '/') {
            console.log('check login');
            return this.$router.push('/');
          }
        }
        this.showLoading(false);
      } else {
        return this.$router.push('/app');
      }
    }
  }
});
