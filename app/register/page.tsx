import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <main className="flex flex-col min-h-screen bg-green-50">
      <Navbar />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto my-auto">
        <h1 className="text-2xl font-bold mb-6 text-center text-green-600">Register</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <Input id="name" type="text" className="mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input id="email" type="email" className="mt-1 block w-full" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <Input id="password" type="password" className="mt-1 block w-full" />
          </div>
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">Register</Button>
        </form>
      </div>
    </main>
  )
}
