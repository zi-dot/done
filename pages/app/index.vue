<template>
  <div>
    <h1 class="title">APP PAGE</h1>
    {{ counter }}
    <button @click="increment">+</button>
    <button class="button is-danger" @click="signOut">Sign Out</button>
  </div>
</template>

<script>
export default {
  layout: 'app',
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    signOut() {
      this.$store.dispatch('user/googleSignOut');
    }
  }
};
</script>

<style scoped></style>
