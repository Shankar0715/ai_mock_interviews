"use client"; // Client component since it handles events

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" }); // Call backend logout API

      router.refresh(); // Refresh the page to clear session
      router.push("/sign-in"); // Redirect to sign-in page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Button variant="blue" size="sm" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
