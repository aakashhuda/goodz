<template>
  <TopBar />
  <Sidebar />
  <h3>HomePage</h3>
  <!-- <div class="card p-5" v-for="user in users" :key="user.id">
    {{ user.firstName }}
  </div>
  <div>
    {{ userStore.lowerUser }}
  </div> -->
  <!-- <el-button
    class="custom-submit-btn font-bold uppercase w-[25%]"
    size="large"
    block
    >Primary</el-button> -->
  <div>
    <el-button
      class="font-bold uppercase w-[25%] mb-5"
      type="primary"
      size="large"
      block
      >Primary</el-button
    >
  </div>
  <div>
    <el-button class="uppercase w-[25%] mb-5" type="success" size="large" block
      >Success</el-button
    >
  </div>
  <div>
    <el-button
      class="font-bold uppercase w-[25%] mb-5"
      type="info"
      size="large"
      block
      >Info</el-button
    >
  </div>
  <div>
    <el-button
      class="font-bold uppercase w-[25%] mb-5"
      type="danger"
      size="large"
      block
      >Danger</el-button
    >
  </div>
  <div>
    <el-button
      class="font-bold uppercase w-[25%] mb-5"
      type="error"
      size="large"
      block
      >Error</el-button
    >
  </div>
</template>

<script>
import { computed, ref, watchEffect, watch } from "vue";
import TopBar from "../../components/general/TopBar.vue";
import Sidebar from "../../components/general/SidebarTailwind.vue";
import useUsers from "../../composables/home/user.js";
import { useUserStore } from "../../stores/userStore.js";

export default {
  components: {
    TopBar,
    Sidebar,
  },

  setup() {
    const userStore = useUserStore();
    const { users, getUsers } = useUsers();
    getUsers()
      .then((data) => {
        users.value = data.users;
      })
      .catch((err) => console.log(err));
    return { users, userStore };
  },
};
</script>
