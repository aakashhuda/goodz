<template>
  <div id="admin-layout" class="">
    <div id="admin-sidebar-container">
      <AdminSidebar @sideBarWidthChanged="changeCollapseState" />
    </div>

    <div
      class="relative transition-all ease-in-out duration-500"
      :style="style"
    >
      <div id="admin-topbar-container">
        <AdminTopbar />
      </div>

      <main id="admin-main-content ">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";
import useLayout from "../composables/admin/layout.js";
import AdminSidebar from "../components/admin/navs/AdminSidebar.vue";
import AdminTopbar from "../components/admin/navs/AdminTopbar.vue";

const {
  sidebarExpanded,
  windowWidth,
  style,
  windowSizeChanged,
  changeCollapseState,
  setLayoutProperties,
} = useLayout();

window.addEventListener("resize", windowSizeChanged);

watch(
  [windowWidth, sidebarExpanded],
  ([newWidth, newSidebarState], [oldWidth, oldSidebarState]) => {
    setLayoutProperties(newWidth, newSidebarState);
  },
  { immediate: true }
);
</script>
