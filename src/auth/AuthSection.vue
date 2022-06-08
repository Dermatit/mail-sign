<template>
  <form class="auth">
    <div class="auth__wrapper">
      <div class="auth__logo">
        <img src="../assets/penLogo.svg" />
      </div>
      <h1>Авторизация ✨</h1>
      <AuthFormVue />
      <button class="auth_wrapper-button" @click.prevent @click="toggleAuth">
        Войти
      </button>
    </div>
  </form>
  <img class="auth__image" src="../assets/image.png" />
</template>

<script>
import AuthFormVue from './AuthForm.vue'
export default {
  components: {
    AuthFormVue,
  },
  methods: {
    toggleAuth() {
      this.$router.push('/employeeList')
    },
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
    button {
      align-self: flex-end;
      background: #6366f1;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 8px 12px;
    }
  }
  h1 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  }
}
</style>
