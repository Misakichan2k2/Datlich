<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const itemMenu = ref([
  {
    title: "Quản Lý Lịch Khám",
    name: "Appointment",
  },
  {
    title: "Quản Lý Thông Tin",
    name: "Doctor",
    item: [
      {
        subItem: "Thông tin bác sĩ",
        name: "Doctor",
      },
      {
        subItem: "Thông tin dịch vụ",
        name: "ServiceExam",
      },
      {
        subItem: "Combo ưu đãi",
        name: "Combo",
      },
    ],
  },
  {
    title: "Quản Lý Customer",
    name: "Customer",
  },
  {
    title: "Quản Lý Staff",
    name: "Staff",
  },
  {
    title: "Quản Lý Giao Dịch",
    name: "Transaction",
  },
  {
    title: "Quản Lý Dữ Liệu Đánh Giá",
    name: "Rating",
  },
  {
    title: "Thống Kê Doanh Thu",
    name: "Revenue",
  },
  {
    title: "Cài Đặt",
    name: "AdminInfo",
    item: [
      {
        subItem: "Thông tin cá nhân",
        name: "AdminInfo",
      },
      {
        subItem: "Đổi mật khẩu",
        name: "ChangePassword",
      },
    ],
  },
]);
</script>

<template>
  <div class="flex flex-column w-16rem md:text-sm">
    <router-link to="/" style="text-decoration: none">
      <div
        class="flex justify-content-center border-bottom-2 border-blue-500 py-4"
      >
        <span class="text-xl p-1 text-blue-400 font-bold">PHÒNG KHÁM</span>
      </div>
    </router-link>

    <div class="flex flex-column">
      <div
        v-for="(menu, index) in itemMenu"
        :key="index"
        class="flex flex-column"
      >
        <!-- item menu -->
        <router-link :to="{ name: menu.name }">
          <div
            class="flex justify-content-between px-3 align-items-center cursor-pointer h-3rem hover:surface-300 hover:text-blue-600"
          >
            <div
              class="flex gap-3 align-items-center font-semibold"
              style="font-size: 0.8rem"
            >
              <i class="pi pi-home"></i>
              <span>{{ menu.title }}</span>
            </div>
            <i v-if="menu.item" class="pi pi-angle-down"></i>
          </div>
        </router-link>

        <!-- Sub item menu -->
        <div
          v-for="(subMenu, index) in menu.item"
          :key="index"
          class="flex flex-column"
        >
          <router-link :to="{ name: subMenu.name }">
            <div
              class="hover:surface-300 py-2 cursor-pointer hover:text-blue-600"
            >
              <span class="w-fit-content pl-6" style="font-size: 0.8rem">
                {{ subMenu.subItem }}
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.border-custom {
  border: 1px solid;
  border-color: linear-gradient(rgb(100, 230, 226), #9198e5);
}
</style>
