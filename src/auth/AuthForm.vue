<template>
  <div class="auth__wrapper-input">
    <p>Email</p>
    <input type="text" />
  </div>
  <div class="auth__wrapper-input">
    <p>Пароль</p>
    <input type="text" />
  </div>
</template>

<script>
export default {}
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
</style>
