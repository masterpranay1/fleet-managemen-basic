"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => router.push("/")}>
            <h1 className="text-xl font-bold text-green-600">
              🚚 Fleet Management
            </h1>
          </div>
          <div className="flex space-x-4">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => router.push("/register")}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
