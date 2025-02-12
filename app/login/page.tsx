"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  return (
    <main className="flex flex-col min-h-screen bg-green-50">
      <Navbar />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto my-auto">
        <h1 className="text-2xl font-bold mb-6 text-center text-green-600">Login</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input id="email" type="email" className="mt-1 block w-full" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <Input id="password" type="password" className="mt-1 block w-full" />
          </div>
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={(e) => {
            e.preventDefault();
            router.push('/dashboard');
          }}>Login</Button>
        </form>
      </div>
    </main>
  )
}