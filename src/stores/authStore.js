import { defineStore } from "pinia";
import { ElNotification } from "element-plus";
import { SignupService } from "../services/auth/SignupService.js";

export const useAuthStore = defineStore("authStore", {
  state() {
    return {
      userInfo: {},
    };
  },
  actions: {
    signUpUser(formData) {
      return new SignupService()
        .signUpUser(formData)
        .then(({ resp, dbUser }) => {
          console.log(resp.user);
          console.log(dbUser);
          if (Object.keys(resp.user).length && Object.keys(dbUser).length) {
            console.log("entered success");
            localStorage.setItem(
              "goodzAuth",
              JSON.stringify({
                authToken: resp.user.authToken,
                refreshToken: resp.user.refreshToken,
              })
            );

            this.userInfo = {
              displayName: dbUser.displayName,
              email: dbUser.email,
              firstName: dbUser.firstName,
              isAdmin: dbUser.isAdmin,
              lastName: dbUser.lastName,
              phoneNumber: dbUser.phoneNumber,
              photo: dbUser.photo,
              uid: dbUser.id,
            };

            ElNotification({
              type: "success",
              title: "Success",
              message: "Successfully Registered",
              offset: 100,
              position: "bottom-right",
            });
          }
          return { user, dbUser };
        })
        .catch((err) => {
          ElNotification({
            type: "error",
            title: "Error",
            message: err.message,
            offset: 100,
            position: "bottom-right",
          });
          return err;
        });
    },
  },
});
