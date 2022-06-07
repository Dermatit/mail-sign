<template>
  <div class="auth__wrapper-input">
    <p>Email</p>
    <input type="text" />
  </div>
  <div class="auth__wrapper-input">
    <p>Пароль</p>
    <input type="text" />
  </div>
  <button class="auth_wrapper-button">Войти</button>
</template>

<script>
export default {
  name: 'AuthForm',
}
</script>

<style lang="scss">
.auth__wrapper-input {
  p {
    color: #475569;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
  }
  input {
    box-sizing: border-box;
    padding: 8px 12px;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    width: 100%;
  }
  input:focus {
    outline: none;
  }
}
.auth_wrapper-button {
  align-self: flex-end;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
}
</style>
