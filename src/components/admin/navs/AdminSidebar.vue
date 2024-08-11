<template></template>

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
