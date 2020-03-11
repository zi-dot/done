<template lang="pug">
  img.base-image(:src="src" @error="error" @click="onClick()" alt="alt")
</template>

<script>
  export default {
    name: 'base-image',
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        default: ''
      }
    },
    methods: {
      error() {
        this.$emit('error')
      },
      onClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style scoped>
  .base-image {
    display: block;
    max-width: 100%;
    max-height: 100%;
  }
</style>
