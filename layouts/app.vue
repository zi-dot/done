<template>
  <div>
    <loading v-if="isLoading" />
    <div v-else>
      <app-header />
      <nuxt />
    </div>
  </div>
</template>
<script>
import AppHeader from '@/components/Molecules/AppHeader';
import loading from '@/components/Organisms/loading';
export default {
  components: {
    AppHeader,
    loading
  },
  data() {
    return {
      auth: this.$store.getters['user/isAuthenticated'],
      isLoading: false
    };
  },
  async created() {
    await this.checkLogin();
  },
  methods: {
    showLoading(bool) {
      this.isLoading = bool;
    }
  },
  beforeDestroy() {
    this.showLoading(false);
  }
};
</script>
