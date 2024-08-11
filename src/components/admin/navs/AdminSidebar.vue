<template>
  <nav
    id="admin-sidebar"
    class="fixed h-full border-r-0 shadow-lg transition-background-color transition-width transition-opacity ease-in-out duration-500"
    :class="isExpanded ? 'w-[12%]' : 'w-[3.5%]'"
  >
    <header
      id="admin-sidebar-header"
      class="flex justify-center items-center gap-3"
    >
      <div class="w-full max-w-[60px]">
        <img class="" src="../../../../public/images/tea.svg" alt="" />
      </div>
    </header>
    <div class="absolute -right-4" :class="isExpanded ? '' : 'rotate-180'">
      <el-button
        @click="handleSidebarWidth"
        id="expand-sidebar"
        type="primary"
        :icon="ArrowLeft"
        circle
      />
    </div>
    <ul class="mt-10 text-info">
      <li class="p-2">
        <router-link
          class="block p-2 bg-[#EBEBEB] rounded flex items-center gap-2"
          ><el-icon :size="30"><DataAnalysis /></el-icon
          ><span :class="isExpanded ? 'opacity-1' : 'opacity-0'"
            >Dashboard</span
          ></router-link
        >
      </li>
      <li class="p-2">
        <router-link class="block p-2 flex items-center gap-2"
          ><el-icon :size="30"><Notebook /></el-icon
          ><span :class="isExpanded ? 'opacity-1' : 'opacity-0'"
            >Orders</span
          ></router-link
        >
      </li>
      <li class="p-2">
        <router-link class="block p-2 flex items-center gap-2"
          ><el-icon :size="30"><Box /></el-icon
          ><span :class="isExpanded ? 'opacity-1' : 'opacity-0'"
            >Products</span
          ></router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import {
  ArrowLeft,
  ArrowRight,
  DataAnalysis,
  Box,
  Notebook,
} from "@element-plus/icons-vue";

const isExpanded = ref(true);
const emit = defineEmits(["sidebarCollapse"]);

watch(isExpanded, (currentSidebarState, previousSidebarState) => {
  emit("sideBarWidthChanged", currentSidebarState);
});

const handleSidebarWidth = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
