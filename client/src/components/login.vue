<template>
  <div class="login">
      <input v-model="username" placeholder="username">
      <input v-model="password" placeholder="password">
      <button @click="login" type="submit">Submit</button>
  </div>
</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    token() {
      return this.$store.token;
    },
  },
  methods: {
    async login() {
      try {
        const response = await this.$store.dispatch('auth/login', { username: this.username, password: this.password });
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
