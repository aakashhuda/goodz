<script setup>
import { ref } from "vue";
import AdminSidebar from "../components/admin/navs/AdminSidebar.vue";
import AdminTopbar from "../components/admin/navs/AdminTopbar.vue";

const sidebarExpanded = ref(true);

function changeCollapseState(isExpanded) {
  sidebarExpanded.value = isExpanded;
}
</script>

<template>
  <div id="admin-layout" class="">
    <div id="admin-sidebar-container">
      <AdminSidebar @sideBarWidthChanged="changeCollapseState" />
    </div>

    <div
      class="relative transition-background-color transition-width transition-opacity ease-in-out duration-500"
      :class="sidebarExpanded ? 'left-[12%]' : 'left-[3.5%]'"
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
