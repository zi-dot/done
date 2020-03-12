<template>
  <div class="container">
    <div>
      <internal-link to="/login">
        Login
      </internal-link>
      <h1 class="title">
        task-manager
      </h1>
      <button @click="login">Login</button>
      {{ message }}
      <h2 class="subtitle">
        My personal project to create task manager
      </h2>
    </div>
  </div>
</template>

<script>
import { InternalLink } from '@/components/Atoms/index.js';
export default {
  components: {
    InternalLink
  },
  data() {
    return {
      message: '',
    };
  },
  methods: {
    login() {
      this.$store.dispatch('user/googleSignIn');
    }
  },
  created() {
    console.log(process.env.FIREBASE_APP_ID)
    this.message = 'ログインチェック中';
    // this.$store.dispatch('user/googleGetRedirectResult').then(r => {
    //   console.log(r);
    //   this.message = 'ログインチェック完了';
    // });
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
