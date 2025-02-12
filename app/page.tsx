"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TruckImage from "@/assets/images/Truck on Highway.jpg";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"; // Import the new Navbar component

import truck3d from "@/assets/images/truck3d.png";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <Navbar /> {/* Use the Navbar component */}
      <section className="flex flex-col items-center justify-center flex-1 text-center p-8 bg-green-100 w-full pt-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-green-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          📊 Manage Your Fleet Efficiently
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A comprehensive dashboard to manage and monitor your fleet operations.
          🚛
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            className="bg-green-600 hover:bg-green-700 text-white mb-4 text-base md:text-lg"
            onClick={() => router.push("/login")}
          >
            🚀 Get Started
          </Button>
        </motion.div>
        <div className="relative w-full">
          <Image
            src={truck3d}
            alt="Fleet Management"
            className="rounded-lg mx-auto animate-none"
          />
        </div>
      </section>
      <footer className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-700">
            &copy; 2023 Fleet Management. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
