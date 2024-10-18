<template>
  <div class="card w-full max-w-xl p-7">
    <form id="signup-form" v-loading="isProcessing">
      <div>
        <h1 class="text-2xl font-semibold text-primary">Register</h1>
      </div>
      <el-divider />
      <div class="mb-5">
        <label class="text-primary text-sm font-medium" for="first-name"
          >First Name</label
        >
        <el-input
          id="first-name"
          v-model="signUpForm.firstName"
          placeholder="Enter First Name"
          :prefix-icon="Avatar"
        />
      </div>
      <div class="mb-5">
        <label class="text-primary text-sm font-medium" for="last-name"
          >Last Name</label
        >
        <el-input
          id="last-name"
          v-model="signUpForm.lastName"
          placeholder="Enter Last Name"
          :prefix-icon="Avatar"
        />
      </div>
      <div class="mb-5">
        <label class="text-primary text-sm font-medium" for="display-name"
          >Display Name</label
        >
        <el-input
          id="display-name"
          v-model="signUpForm.displayName"
          placeholder="Enter Display Name (Optional)"
          :prefix-icon="Avatar"
        />
      </div>
      <div class="mb-5">
        <label class="text-primary text-sm font-medium" for="phone-no"
          >Phone no</label
        >
        <el-input
          id="phone-no"
          v-model="signUpForm.phoneNumber"
          placeholder="Enter Phone No"
          :prefix-icon="Cellphone"
        />
      </div>
      <div class="mb-5">
        <label class="text-primary text-sm font-medium" for="email"
          >Email</label
        >
        <el-input
          id="email"
          v-model="signUpForm.email"
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
          v-model="signUpForm.password"
          type="password"
          placeholder="Enter password"
          show-password
          :prefix-icon="Lock"
        />
      </div>
      <div class="float-right">
        <el-button :loading="isProcessing" @click="onFormSubmit" type="primary"
          >Submit</el-button
        >
        <el-button :loading="isProcessing" @click="resetForm" type="danger"
          >Reset</el-button
        >
      </div>
    </form>
  </div>
</template>

<script setup>
import { Message, Lock, Avatar, Cellphone } from "@element-plus/icons-vue";
import useSignup from "../../composables/auth/useSignup";

const { isProcessing, signUpForm, onFormSubmit, resetForm } = useSignup();
</script>
