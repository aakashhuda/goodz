import { ref } from "vue";

export default function useLogin() {
  let loginForm = ref({
    email: "",
    password: "",
  });

  function onFormSubmit() {
    console.log(loginForm.value);
  }
  function resetForm() {
    loginForm.value = { email: "", password: "" };
  }

  return { loginForm, onFormSubmit, resetForm };
}
