<template>
  <nav id="admin-sidebar" class="fixed w-[12%] h-full border-r">
    <header
      id="admin-sidebar-header"
      class="flex justify-center items-center gap-3"
    >
      <div class="w-[70px]">
        <img class="" src="../../../../public/images/tea.svg" alt="" />
      </div>
      <div class="text-[22px] font-bold">Goodz</div>
    </header>
    <ul class="mt-10">
      <li class="">
        <router-link class="block p-5 bg-[#909399]">Dashboard</router-link>
      </li>
      <li class=""><router-link>Orders</router-link></li>
      <li class=""><router-link>Products</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue";

const isCollapse = ref(true);
const emit = defineEmits(["sidebarCollapse"]);

// watch(isCollapse, (currentCollapseState, prevCollapseState) => {
//   emit("sidebarCollapse", currentCollapseState);
// });

// const changeCollapseState = () => {
//   if (isCollapse.value) {
//     isCollapse.value = false;
//   } else {
//     isCollapse.value = true;
//   }
// };
</script>
