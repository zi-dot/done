<template>
  <input :id="id" :type="type" :placeholder="placeholder" />
</template>
<script>
export default {
  name: 'base-input',
  props: {
    placeholder: {
      required: true,
      type: String
    },
    type: {
      required: true,
      type: String,
      validator(value) {
        return ['email', 'text', 'number'].indexOf(value) !== -1;
      }
    },
    id: {
      required: true,
      type: String
    }
  }
};
</script>
