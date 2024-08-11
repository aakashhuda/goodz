<template>
  <el-menu
    :default-active="generalStore.initialActiveIndex"
    class="el-menu-demo font-bold"
    mode="horizontal"
    background-color="#0a4e98"
    text-color="#eaf0f6"
    active-text-color="#ffffff"
    @select="handleSelect"
  >
    <el-menu-item
      v-for="category in generalStore.categories"
      :key="category.id"
      :index="category.id"
      >{{ category.category.toUpperCase() }}</el-menu-item
    >
    <el-menu-item></el-menu-item>
  </el-menu>
</template>

<script setup>
import useTopbar from "../../composables/general/topbar.js";

const { activeIndex, handleSelect, generalStore } = useTopbar();
</script>
