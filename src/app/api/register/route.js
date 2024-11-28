import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { dbConnect } from "../../../lib/mongoDb";
import { User } from "../../../modal/user"; 

export const POST = async(request) =>{
    try {
        const { name, email, password } = await request.json();
        // console.log(name, email, password);

        await dbConnect();
        console.log("Database connected successfully");

        const existingUser = await User.findOne({ email });
        if (existingUser) {
          console.error("User already exists:", existingUser);
          throw new Error("User already exists");
        }
        const hashPassword = await bcrypt.hash(password, 5);
        console.log("Password hashed successfully");

        await User.create({
          name,
          email,
          password: hashPassword,
        });
        return new NextResponse("User have been created", {
          status: 201,
        });
    } catch (error) {
        console.error("Error creating user:", error.message);
        return new NextResponse(error.message, { status: 500 });
    }
}

export const fetchAllUsers = async () => {
  await dbConnect();
  const users = await User.find({});
  return users;
};