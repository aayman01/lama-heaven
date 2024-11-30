import { ObjectId } from "mongodb";
import { connectDB } from "../../../lib/mongo";

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    const { name, email , address } = req.body; 
    // const userId = req.query;
    const { _id: userId } = req.query;
    console.log("user id",userId)

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    try {
      const db = await connectDB();
      const usersCollection = db.collection("users"); 

      // Update the user's data in MongoDB
      const result = await usersCollection.updateOne(
        { _id: new ObjectId(userId) },
        { $set: { name: name, email: email, address: address } }
      );

      console.log("Update Result:", result);
      if (result.matchedCount === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "Profile updated successfully" });
    } catch (error) {
      // console.error("Error updating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["PATCH"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
