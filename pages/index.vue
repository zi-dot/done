<template>
  <div>
    <div class="hero is-primary is-large is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            task-manager
          </h1>
          <p class="subtitle">
            My personal project to create task manager
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { InternalLink } from '@/components/Atoms/index.js';
export default {
  layout: 'beforeLogin',
  components: {
    InternalLink
  }
};
</script>
