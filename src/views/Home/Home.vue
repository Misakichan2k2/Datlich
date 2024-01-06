<script setup>
import TopBar from "./components/TopBar.vue";
import ChartData from "./components/ChartData.vue";
import TableService from "./components/TableService.vue";
import SubMenu from "./components/SubMenu.vue";
// import AppointmentManagement from "./AppointmentManagement.vue";
</script>

<template>
  <div class="relative w-full surface-hover">
    <!-- Background in Right -->
    <div class="background-custom w-full h-16rem"></div>
    <!-- tìm css của backgournd-custom -->
    <!-- Right content -->
    <div class="w-full pt-3 px-5 absolute top-0">
      <!-- Top bar -->
      <TopBar></TopBar>

      <!-- Sub menu -->
      <div class="flex flex-column gap-3">
        <SubMenu />

        <!-- ChartData -->
        <ChartData />

        <!-- TableService -->
        <TableService />

        <!-- <AppointmentManagement :isClicked="isClicked" /> -->

        <!-- <ThongKeDoanhThu /> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.background-custom {
  background: linear-gradient(rgb(100, 230, 226), #9198e5);
}
</style>
