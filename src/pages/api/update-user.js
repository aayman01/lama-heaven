import { ObjectId } from "mongodb";
import { connectDB } from "../../lib/mongo";

export default async function handler(req, res) {
  if (req.method === "PATCH") {
    const { username, location, bio } = req.body; // Extract the fields from the request body
    const userId = req.query.id; // Assume the user ID is passed as a query parameter

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    try {
      const db = await connectDB(); // Establish a connection to the database
      const usersCollection = db.collection("users"); // Replace "users" with your collection name

      // Update the user's data in MongoDB
      const result = await usersCollection.updateOne(
        { _id: new ObjectId(userId) }, // Match by user ID
        { $set: { username, location, bio } } // Update the specified fields
      );

      if (result.matchedCount === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ message: "Profile updated successfully" });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["PATCH"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
