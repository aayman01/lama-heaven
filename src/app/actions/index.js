"use server";
import { signIn,signOut } from "@/auth";

export async function socialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/" });
}

export async function logOut() {
  signOut({redirectTo : "/"})
}

export async function doCredentialLogin (formData) {
  try {
    const response = await signIn("credentials", {
      email : formData.get("email"),
      password : formData.get("password"),
      redirect : false
    });
    console.log(response)
    return response
  } catch (error) {
    throw new Error(error, "error in index")
  }
}
