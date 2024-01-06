<script setup>
import { ref } from "vue";

const tabViews = ref([
  {
    header: "Thống kê theo ngày",
  },
  {
    header: "Thống kê theo Tháng",
  },
]);
</script>

<template>
  <div class="card">
    <TabView>
      <TabPanel
        v-for="item in tabViews"
        :key="item.header"
        :header="item.header"
      >
        <p class="m-0">abc</p>
      </TabPanel>
    </TabView>
  </div>
</template>

<style scoped>
.selected-item {
  background-color: white;
  font-weight: 600;
  border-bottom: none;
}
.deselect-item {
  background-color: rgb(248, 248, 248);
  color: var(--surface-800);
}

.deselect-item:hover {
  background-color: var(--surface-200);
  color: var(--blue-600);
}
</style>
