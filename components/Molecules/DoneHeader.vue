<template>
  <nav class="navbar" role="navigation">
    <div class="navbar-brand">
      <internal-link class="navbar-item title" to="/">Done</internal-link>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <internal-link class="button is-primary" to="/login">
            <strong>Sign up</strong>
          </internal-link>
          <internal-link class="button is-light" to="/login">
            Log in
          </internal-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import InternalLink from '@/components/Atoms/InternalLink';
export default {
  name: 'done-header',
  components: {
    InternalLink
  }
};
</script>
