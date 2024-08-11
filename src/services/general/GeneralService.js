import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";

export class TopbarService {
  constructor(collectionName) {
    this.collectionName = collectionName;
    this.categories = [];
  }

  async getCategories() {
    const querySnapshot = await getDocs(collection(db, this.collectionName));
    return querySnapshot;
  }

  setCategories() {}
}
