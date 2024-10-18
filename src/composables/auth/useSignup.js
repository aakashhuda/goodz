import { ref } from "vue";
import { useAuthStore } from "../../stores/authStore.js";
import { ElNotification } from "element-plus";

export default function useLogin() {
  const authStore = useAuthStore();

  let signUpForm = ref({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    displayName: "",
  });

  let isProcessing = ref(false);

  function onFormSubmit() {
    isProcessing.value = true;
    const formData = {
      email: signUpForm.value.email,
      password: signUpForm.value.password,
      firstName: signUpForm.value.firstName,
      lastName: signUpForm.value.lastName,
      phoneNumber: signUpForm.value.phoneNumber,
      displayName: signUpForm.value.displayName,
    };

    authStore.signUpUser(formData).then(() => {
      isProcessing.value = false;
      ElNotification({
        title: "Success",
        message: "Successfully Registered",
        type: "success",
        duration: 2000,
        offset: 100,
        position: "bottom-right",
      });
    });
  }
  function resetForm() {
    signUpForm.value = { email: "", password: "" };
  }

  return { isProcessing, signUpForm, onFormSubmit, resetForm };
}
