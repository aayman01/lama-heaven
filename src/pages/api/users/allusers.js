import { connectDB } from "../../../lib/mongo";

export default async function handler(req, res) {
  const db = await connectDB();
  if (req.method === "GET") {
    try {
      //   const db = await client.db("Lama-heaven");
      const users = await db.collection("users").find().toArray(); // Get all users from the "users" collection
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
