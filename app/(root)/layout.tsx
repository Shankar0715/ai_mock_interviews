import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";
import LogoutButton from "@/components/LogoutButton"; // Import Logout Button

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      {/* Top Navigation Bar */}
      <nav className="flex justify-between p-4 bg-amber-100x` text-blue-500">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/next.png" alt="MockMate Logo" width={190} height={50} />
        </Link>

        {/* Logout Button */}
        <LogoutButton />
      </nav>

      {children}
    </div>
  );
};

export default Layout;
