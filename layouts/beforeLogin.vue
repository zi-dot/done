<template>
  <div>
    <loading v-if="isLoading" />
    <div v-else>
      <done-header />
      <nuxt />
    </div>
  </div>
</template>
<script>
import loading from '@/components/Organisms/loading';
import DoneHeader from '@/components/Molecules/DoneHeader';
export default {
  components: {
    loading,
    DoneHeader
  },
  data() {
    return {
      isLoading: false
    };
  },
  async created() {
    await this.checkLogin();
    this.$nuxt.$on('showLoading', this.showLoading);
    this.$nuxt.$on('checkLogin', this.checkLogin);
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
