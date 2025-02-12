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
} from "recharts";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Import Shadcn components
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>Total Vehicles</CardHeader>
          <CardContent>{fleetStats.totalVehicles}</CardContent>
        </Card>
        <Card>
          <CardHeader>Active Trips</CardHeader>
          <CardContent>{fleetStats.activeTrips}</CardContent>
        </Card>
        <Card>
          <CardHeader>Warnings</CardHeader>
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
    </div>
  );
};

export default Dashboard;
