<template>
  <form class="auth">
    <div class="auth__wrapper">
      <div class="auth__logo">
        <img src="../assets/Vector-1.svg" />
        <img src="../assets/Vector.svg" />
      </div>
      <h1>Авторизация ✨</h1>
      <AuthFormVue />
    </div>
  </form>
  <img class="auth__image" src="../assets/image.png" />
</template>

<script>
import AuthFormVue from './AuthForm.vue'
export default {
  name: 'AuthComponent',
  components: {
    AuthFormVue,
  },
}
</script>

<style lang="scss">
.auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  &__image {
    height: 100vh;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    height: 40%;
  }
  h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  }
}
</style>
