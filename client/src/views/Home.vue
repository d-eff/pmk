<template>
  <div class="home">
      <Login />
  </div>
</template>

<script>
import Login from '@/components/login.vue';

export default {
  name: 'home',
  components: {
    Login,
  },
};
</script>
