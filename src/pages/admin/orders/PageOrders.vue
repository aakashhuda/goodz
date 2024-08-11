<script setup>
import { ref } from "vue";
import TableOrder from "../../../components/admin/orders/TableOrder.vue";
</script>

<template>
  <div class="p-5">
    <div class="panel-header p-5 mb-5">
      <h1>Orders</h1>
    </div>
    <TableOrder />
  </div>
</template>
