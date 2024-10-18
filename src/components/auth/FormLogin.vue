<template>
  <div class="card w-full max-w-xl p-7">
    <form id="login-form">
      <div>
        <h1 class="text-2xl font-semibold text-primary">Login</h1>
      </div>
      <el-divider />
      <div class="mb-5">
        <label class="text-primary text-sm font-medium" for="email"
          >Email</label
        >
        <el-input
          id="email"
          v-model="loginForm.email"
          type="email"
          placeholder="Enter email"
          :prefix-icon="Message"
        />
      </div>
      <div class="mb-5">
        <label class="text-primary text-sm font-medium" for="password"
          >Password</label
        >
        <el-input
          id="password"
          v-model="loginForm.password"
          type="password"
          placeholder="Enter password"
          show-password
          :prefix-icon="Lock"
        />
      </div>
      <div class="float-right">
        <el-button @click="onFormSubmit" type="primary">Login</el-button>
        <el-button @click="resetForm" type="danger">Reset</el-button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { Message, Lock } from "@element-plus/icons-vue";
import useLogin from "../../composables/auth/useLogin";

const { loginForm, onFormSubmit, resetForm } = useLogin();
</script>
