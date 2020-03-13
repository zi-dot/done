<template>
  <label :for="id" class="inp">
    <base-input :type="type" id="id" placeholder=" " />
    <span class="label">{{ placeholder }}</span>
    <span class="border"></span>
  </label>
</template>

<script>
import BaseInput from '@/components/Atoms/BaseInput';
export default {
  name: 'input-with-label',
  components: {
    BaseInput
  },
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.inp {
  position: relative;
  display: block;
  width: 100%;
  max-width: 280px;
}
.inp .label {
  position: absolute;
  top: 12px;
  left: 0;
  font-size: 16px;
  color: #9098a9;
  font-weight: 500;
  transform-origin: 0 0;
  transition: all 0.2s ease;
}
.inp .border {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background: #07f;
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all 0.15s ease;
}
.inp input {
  -webkit-appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 12px 0;
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 2px solid #c8ccd4;
  background: none;
  border-radius: 0;
  color: #223254;
  transition: all 0.15s ease;
}
.inp input:hover {
  background: rgba(34, 50, 84, 0.03);
}
.inp input:not(:placeholder-shown) + span {
  color: #5a667f;
  transform: translateY(-16px) scale(0.75);
}
.inp input:focus {
  background: none;
  outline: none;
}
.inp input:focus + span {
  color: #07f;
  transform: translateY(-16px) scale(0.75);
}
.inp input:focus + span + .border {
  transform: scaleX(1);
}
</style>
