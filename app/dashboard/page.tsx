"use client";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Import Shadcn components
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const [vehicleData, setVehicleData] = useState<
    { lat: number; lng: number }[]
  >([]);
  const [activeDrivers, setActiveDrivers] = useState(0);
  const [alerts, setAlerts] = useState<{ id: number; message: string }[]>([]);
  const [fleetStats, setFleetStats] = useState({
    totalVehicles: 0,
    activeTrips: 0,
    warnings: 0,
  });

  useEffect(() => {
    // Set dummy data for vehicle tracking, active drivers, alerts, and fleet statistics
    setVehicleData([
      { lat: 20.5937, lng: 78.9629 }, // India coordinates
      { lat: -3.746, lng: -38.524 },
      // ...more dummy data
    ]);
    setActiveDrivers(5);
    setAlerts([
      { id: 1, message: "Low fuel" },
      { id: 2, message: "Maintenance required" },
      // ...more dummy alerts
    ]);
    setFleetStats({ totalVehicles: 50, activeTrips: 10, warnings: 3 });
  }, []);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 20.5937,
    lng: 78.9629,
  };

  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    // ...more data
  ];

  const pieData = [
    { name: "Active", value: 400 },
    { name: "Inactive", value: 300 },
    { name: "Maintenance", value: 300 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  const barData = [
    { name: "Jan", utilization: 65 },
    { name: "Feb", utilization: 59 },
    // ...more data
  ];

  const radarData = [
    { subject: "Speeding", A: 120, B: 110, fullMark: 150 },
    { subject: "Harsh Braking", A: 98, B: 130, fullMark: 150 },
    { subject: "Sharp Turns", A: 86, B: 99, fullMark: 150 },
    { subject: "Rapid Acceleration", A: 99, B: 85, fullMark: 150 },
    { subject: "Over Speeding", A: 85, B: 90, fullMark: 150 },
    { subject: "Sudden Stops", A: 65, B: 85, fullMark: 150 },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <div className="w-64 bg-green-700 text-white p-4">
          <h2 className="text-2xl font-bold mb-4">Sidebar</h2>
          <ul>
            <li className="mb-2">Dashboard</li>
            <li className="mb-2">Vehicles</li>
            <li className="mb-2">Drivers</li>
            <li className="mb-2">Reports</li>
          </ul>
        </div>
        <div className="w-3/4 p-4 bg-green-50 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>Total Vehicles 🚗</CardHeader>
              <CardContent>{fleetStats.totalVehicles}</CardContent>
            </Card>
            <Card>
              <CardHeader>Active Trips 🚚</CardHeader>
              <CardContent>{fleetStats.activeTrips}</CardContent>
            </Card>
            <Card>
              <CardHeader>Warnings ⚠️</CardHeader>
              <CardContent>{fleetStats.warnings}</CardContent>
            </Card>
          </div>
          <div className="mt-4">
            {/* @ts-ignore */}
            <MapContainer style={mapContainerStyle} center={center} zoom={5}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {vehicleData.map((vehicle, index) => (
                <Marker key={index} position={[vehicle.lat, vehicle.lng]} />
              ))}
            </MapContainer>
          </div>
          <div className="mt-4">
            <LineChart width={600} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
          <div className="mt-4">
            <PieChart width={400} height={400}>
              <Pie
                data={pieData}
                cx={200}
                cy={200}
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="mt-4">
            <BarChart width={600} height={300} data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="utilization" fill="#82ca9d" />
            </BarChart>
          </div>
          <div className="mt-4">
            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Driver A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="Driver B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            </RadarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
