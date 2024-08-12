<script setup>
import { ref, watch, computed } from "vue";
import AdminSidebar from "../components/admin/navs/AdminSidebar.vue";
import AdminTopbar from "../components/admin/navs/AdminTopbar.vue";

const sidebarExpanded = ref(true);
const windowWidth = ref(document.body.clientWidth);
const style = ref({ left: "200px", width: "0px" });

watch(
  [windowWidth, sidebarExpanded],
  ([newWidth, newSidebarState], [oldWidth, oldSidebarState]) => {
    const { contentWidth, contentPosition } = getContentProperties(
      newWidth,
      newSidebarState
    );

    style.value = {
      left: contentPosition,
      width: contentWidth,
    };
  },
  { immediate: true }
);

window.addEventListener("resize", windowSizeChanged);

function windowSizeChanged() {
  windowWidth.value = document.body.clientWidth;
}

function changeCollapseState(isExpanded) {
  sidebarExpanded.value = isExpanded;
}

function getContentProperties(newWindowWidth, newSidebarState) {
  let contentWidth;
  let contentPosition;

  if (newSidebarState) {
    contentWidth = newWindowWidth - 200 + "px";
    contentPosition = "200px";
  } else {
    contentWidth = newWindowWidth - 63 + "px";
    contentPosition = "63px";
  }
  return { contentWidth, contentPosition };
}
</script>

<template>
  <div id="admin-layout" class="">
    <div id="admin-sidebar-container">
      {{ windowWidth }}
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
