import { signOut } from "@/lib/actions/auth.action";

export async function POST() {
  return await signOut(); // Return the response from signOut directly
}
