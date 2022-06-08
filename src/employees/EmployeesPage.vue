<template>
  <div class="employeesPage">
    <NavComponentVue />
    <button @click="toggleEmployees">Назад</button>
    <HeaderComponentVue />
  </div>
</template>

<script>
import HeaderComponentVue from './HeaderComponent.vue'
import NavComponentVue from './NavComponent.vue'

export default {
  components: {
    HeaderComponentVue,
    NavComponentVue,
  },
  methods: {
    toggleEmployees() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss">
.employeesPage {
  display: flex;
  width: 100%;
}
</style>
