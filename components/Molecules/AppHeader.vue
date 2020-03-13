<template>
  <nav class="navbar is-danger" role="navigation">
    <div class="navbar-brand">
      <internal-link class="navbar-item title" to="/app">Done</internal-link>
    </div>
  </nav>
</template>

<script>
import InternalLink from '@/components/Atoms/InternalLink';
export default {
  name: 'app-header',
  components: {
    InternalLink
  }
};
</script>

<style scoped>
.navbar {
  height: 44px;
  background-color: orangered;
}
.navbar-item {
  color: #fff;
}
.navbar-item:hover {
  background-color: orangered;
}
</style>
