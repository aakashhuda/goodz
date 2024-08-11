import { ref, onMounted, computed } from "vue";

import { useGeneralStore } from "../../stores/generalStore.js";

export default function useTopbar() {
  const generalStore = useGeneralStore();

  let activeIndex = ref("");
  const handleSelect = (key, keyPath) => {
    console.log(key, keyPath);
  };

  if (!generalStore.categories.length > 0) {
    generalStore.getCategories();
  }

  return { activeIndex, handleSelect, generalStore };
}
