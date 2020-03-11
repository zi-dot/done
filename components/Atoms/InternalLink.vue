<template lang="pug">
  nuxt-link.link(:to="to")
    slot
</template>
<script>
  export default {
    props: {
      name: 'internal-link',
      to: {
        type: String,
        required: true
      }
    }
  }
</script>
<style scoped>
  .link {
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.54);
  }
</style>
