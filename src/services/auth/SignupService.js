import { db, auth } from "../../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

export class SignupService {
  async signUpUser(formData) {
    let dbUser = {};
    const resp = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );
    if (resp.user) {
      dbUser = await this.createDbUser(resp.user, formData);
    }
    return { resp, dbUser };
  }

  async createDbUser(user, userData) {
    const resp = await addDoc(collection(db, "users"), {
      displayName: userData.displayName,
      email: userData.email,
      firstName: userData.firstName,
      isAdmin: false,
      lastName: userData.lastName,
      phoneNumber: userData.phoneNumber,
      photo: "",
      uid: user.uid,
    });
    return resp;
  }
}
