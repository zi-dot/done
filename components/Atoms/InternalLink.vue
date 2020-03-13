<template>
  <nuxt-link class="link" :to="to"><slot /></nuxt-link>
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
};
</script>
