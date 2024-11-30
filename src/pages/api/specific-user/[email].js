import { connectDB } from "../../../lib/mongo";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    try {
      const db = await connectDB();
      const usersCollection = db.collection("users");

      const user = await usersCollection.findOne({ email: email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json(user); // Return the user data
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
