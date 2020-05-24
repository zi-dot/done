<template>
  <div>
    <base-image
      class="google-login-btn"
      :src="
        require('~/assets/images/google_login/btn_google_signin_normal.png')
      "
      alt="Google Login"
      @click="login()"
    />
    <base-image
      class="google-login-btn"
      :src="
        require('~/assets/images/svg/cladinwoob-logo.svg')
      "
      alt="Google Login"
      @click="login()"
    />
    <input-with-label
      id="test"
      placeholder="test"
      type="text"
    ></input-with-label>
    <button @click="signOut()">sign out</button>
  </div>
</template>
<script>
import { BaseImage } from '@/components/Atoms';
import InputWithLabel from '@/components/Molecules/InputWithLabel';

export default {
  layout: 'beforeLogin',
  components: {
    BaseImage,
    InputWithLabel
  },
  methods: {
    login() {
      this.$store.dispatch('user/googleSignIn');
    },
    signOut() {
      this.$store.dispatch('user/googleSignOut');
    }
  },
  async created() {
    const result = await this.$store.dispatch('user/googleGetRedirectResult');
    if (result.user !== null) {
      this.$router.push('/app');
    }
  }
};
</script>
<style scoped>
.google-login-btn {
  cursor: pointer;
}
</style>
