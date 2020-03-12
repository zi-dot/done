<template lang="pug">
  div
    base-image.google-login-btn(:src="require('~/assets/images/google_login/btn_google_signin_normal.png')" alt="Google Login" @click="login()")
    p {{ message }}
</template>
<script>
  import {BaseImage} from '@/components/Atoms';

  export default {
    components: {
      BaseImage
    },
    data() {
      return {
        message: ''
      }
    },
    methods: {
      login() {
        this.$store.dispatch('user/googleSignIn');
      }
    },
    created() {
      this.message = 'ログインチェック中';
      // this.$store.dispatch('user/googleGetRedirectResult').then(r => {
      //   console.log(r);
      //   this.message = 'ログインチェック完了';
      // });
    }
  }
</script>
<style scoped>
  .google-login-btn {
    cursor: pointer;
  }
</style>
