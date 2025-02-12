"use client";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-green-600">
              🚚 Fleet Management
            </h1>
          </div>
          <div>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
