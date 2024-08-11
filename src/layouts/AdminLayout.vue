<script setup>
import { ref } from "vue";
import AdminSidebar from "../components/admin/navs/AdminSidebar.vue";
import AdminTopbar from "../components/admin/navs/AdminTopbar.vue";

// const sidebarCollapsed = ref(true);

// function changeCollapseState(isCollapse) {
//   sidebarCollapsed.value = isCollapse;
// }
</script>

<template>
  <div id="admin-layout" class="">
    <div id="admin-sidebar-container">
      <AdminSidebar />
    </div>

    <div class="relative left-[12%]">
      <div id="admin-topbar-container">
        <AdminTopbar />
      </div>

      <main id="admin-main-content ">
        <router-view />
      </main>
    </div>
  </div>
</template>
