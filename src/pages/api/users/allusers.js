import { dbConnect } from "../../../lib/mongoDb";

export default async function handler(req, res) {
  await dbConnect(); // Connect to the database

  if (req.method === "GET") {
    try {
      const db = client.db("Lama-heaven");
      const users = await db.collection("users").find().toArray(); // Get all users from the "users" collection
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
