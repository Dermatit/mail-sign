<template>
  <header>
    <div class="user">
      <img src="../assets/warnIcon.svg" />
      <div class="stick"></div>
      <img src="../assets/userImage.svg" />
      <p>Администратор</p>
      <img src="../assets/downArrow.svg" />
    </div>
  </header>
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
