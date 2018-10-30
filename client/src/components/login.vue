<template>
  <div class="login">
      <input v-model="username" placeholder="username">
      <input v-model="password" placeholder="password">
      <button @click="login" type="submit">Submit</button>
  </div>
</template>

<script>
import auth from '@/models/auth.model';

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await auth.login(this.username, this.password);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>
