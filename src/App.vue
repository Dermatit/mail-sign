<script>
import AuthComponent from './components/Auth.vue'
export default {
  name: 'App',
  components: {
    AuthComponent,
  },
}
</script>

<template>
  <AuthComponent />
</template>

<style>
body,
h1,
p {
  margin: 0;
}
#app {
  display: flex;
  justify-content: space-between;
}
</style>
