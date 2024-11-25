import { userData } from "../models/userModel.js";

const createDoc = async () => {
   try {
      const user1 = new userData({
         name: "Prince Kumar",
         email: "kumarprince143p143@gmail.com",
         subject: "Reg.: Collab",
         message: "Hi, I want make collab video with you."
      })
      const result = await user1.save();
      console.log(result);
   } catch (error) {
      console.log(error);
   }
}

export { createDoc };

