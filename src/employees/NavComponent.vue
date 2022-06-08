<template>
  <nav>
    <div class="nav__wrapper">
      <img src="../assets/penLogo.svg" />
      <div class="employees">
        <img src="../assets/employees.svg" />
        <p>Сотрудники</p>
      </div>
      <div class="templates">
        <img src="../assets/templates.svg" />
        <p>Шаблоны</p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
header {
  height: 64px;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: flex-end;
  .user {
    display: flex;
    .stick {
      width: 1px;
      height: 24px;
      background: #e2e8f0;
    }
  }
}
</style>
