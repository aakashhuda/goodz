<template>
  <h3>Admin Topbar</h3>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const circleUrl =
  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";

const emit = defineEmits({
  unvalidatedEvent: null,
  sidebarStateChange: (state) => {
    console.log(state);
  },
});
</script>
