'use client';

import { useState } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { Input } from '@/components/atoms/input';
import { Label } from '@/components/atoms/label';
import { Button } from './atoms/button';

// Manchester city center coordinates
const MANCHESTER_CENTER: LatLngExpression = [53.4808, -2.2426];

// Example service coverage area (you can adjust these coordinates)
const serviceArea: LatLngExpression[] = [
  [53.5200, -2.3000], // NW
  [53.5180, -2.2900],
  [53.5150, -2.2800],
  [53.5120, -2.2700],
  [53.5100, -2.2600],
  [53.5080, -2.2500],
  [53.5070, -2.2400],
  [53.5050, -2.2300],
  [53.5030, -2.2200],
  [53.5050, -2.2100],
  [53.5000, -2.2000],
  [53.4950, -2.1900],
  [53.4900, -2.1850],
  [53.4850, -2.1800],
  [53.4800, -2.1850],
  [53.4750, -2.1900],
  [53.4700, -2.2000],
  [53.4650, -2.2100],
  [53.4600, -2.2200],
  [53.4550, -2.2300],
  [53.4500, -2.2400],
  [53.4470, -2.2500],
  [53.4450, -2.2600],
  [53.4470, -2.2700],
  [53.4500, -2.2800],
  [53.4550, -2.2900],
  [53.4600, -2.3000],
  [53.4650, -2.3100],
  [53.4700, -2.3150],
  [53.4750, -2.3200],
  [53.4800, -2.3220],
  [53.4850, -2.3210],
  [53.4900, -2.3200],
];




export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="container mx-auto p-6 py-12 bg-white rounded-md shadow-md my-12 relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#ffbd39] rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Book Our Services</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map Section */}
        <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={MANCHESTER_CENTER}
            zoom={12}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Polygon
              positions={serviceArea}
              pathOptions={{
                color: 'yellow',
                fillColor: 'yellow',
                fillOpacity: 0.3,
              }}
            />
          </MapContainer>
        </div>

        {/* Booking Form Section */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className='mb-2.5 ml-1'>Full Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="email" className='mb-2.5 ml-1'>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="phone" className='mb-2.5 ml-1'>Phone Number</Label>
              <Input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="message" className='mb-2.5 ml-1'>Additional Information</Label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <Button className="w-full" type='submit'>
              Book Now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
} 