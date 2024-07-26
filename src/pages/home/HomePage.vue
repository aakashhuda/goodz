<template>
  <TopBar />
  <h3>HomePage</h3>
  <div v-for="user in users" :key="user.id">
    {{ user.firstName }}
  </div>
  <div>
    {{ userStore.lowerUser }}
  </div>
</template>

<script>
import { computed, ref, watchEffect, watch } from "vue";
import TopBar from "../../components/general/TopBar.vue";
import useUsers from "../../use/home/user.js";
import { useUserStore } from "../../stores/userStore.js";

export default {
  components: {
    TopBar,
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
