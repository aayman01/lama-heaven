import { connectDB } from "../../lib/mongo";

// export default async function handler(req, res) {
//   const db = await connectDB();
//   if (req.method === "GET") {
//     try {
//       //   const db = await client.db("Lama-heaven");
//       const users = await db.collection("rooms").find().toArray(); // Get all users from the "users" collection
//       res.status(200).json(users);
//     } catch (error) {
//       res.status(500).json({ error: "Failed to fetch users" });
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// }
async function getRooms(filters) {
  try {
    const db = await connectDB();
    const roomsCollection = db.collection("rooms");

    // Create the filter query
    const query = {};

    if (filters.bedFilter) {
      query.bed = parseInt(filters.bedFilter);
    }
    if (filters.guestFilter) {
      query.guest = parseInt(filters.guestFilter);
    }
    if (filters.priceFilter) {
      query.price = { $lte: parseInt(filters.priceFilter) };
    }
    if (filters.acFilter) {
      query.air_con = filters.acFilter === "AC";
    }

    // Fetch filtered rooms
    const rooms = await roomsCollection.find(query).toArray();
    return rooms;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw error;
  } finally {
    // await client.close();
  }
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const filters = {
        bedFilter: req.query.bedFilter || null,
        guestFilter: req.query.guestFilter || null,
        priceFilter: req.query.priceFilter || null,
        acFilter: req.query.acFilter || null,
      };

      const rooms = await getRooms(filters);
      res.status(200).json(rooms);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch rooms", error });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
