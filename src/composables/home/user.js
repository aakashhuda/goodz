import axios from "axios";
import { ref } from "vue";

export default function useUsers() {
  const users = ref([]);

  async function getUsers() {
    const resp = await axios.get("https://dummyjson.com/users");

    return resp.data;
  }

  return { users, getUsers };
}
