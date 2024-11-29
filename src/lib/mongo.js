// import { MongoClient, ServerApiVersion } from "mongodb";

// let client;
// export const connectDB = async () => {
//   if (client) return client;
//   try {
//     const uri = process.env.MONGODB_URI;
//     const client = new MongoClient(uri, {
//       serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//       },
//     });

//     // db = client.db("Lama-heaven");
//     return client;
//   } catch (error) {
//     // console.log(error);
//   }
// };

import { MongoClient, ServerApiVersion } from "mongodb";

let client;
let clientPromise;

export const connectDB = async () => {
  // If the client is already initialized, return it
  if (client) return client;

  try {
    const uri = process.env.MONGODB_URI;
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    // Establish connection
    clientPromise = client.connect();
    await clientPromise;

    console.log("Connected to MongoDB");
    return client; // Return the connected client
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Re-throw the error to handle it outside
  }
};
