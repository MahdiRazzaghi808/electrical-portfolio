'use client';

import { useState } from 'react';
import { MapContainer, TileLayer, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { Input } from '@/components/atoms/input';
import { Label } from '@/components/atoms/label';
import { Button } from './atoms/button';

import { motion } from 'framer-motion';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './atoms/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './atoms/tabs';
import { usePostCreateBooking } from '@/api/services/core/Booking/CreateBooking/post/use-post-create-booking';
import Comment from './comment';

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
    fullName: '',
    postCode: '',
    serviceType: 1,
    phoneNumber: '',
    message: '',
  });
  const mutation = usePostCreateBooking({
    onSuccess: () => {
    },
    onError: () => {
    },
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="container mx-auto p-6 py-12 bg-foreground rounded-md shadow-md my-12 relative overflow-hidden">
      <>
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#9c1923] rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#c22530] rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </>



      <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">Book Our Services</h2>

      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Map Section */}
        <motion.div
          className="h-[720px] w-full rounded-lg overflow-hidden shadow-lg lg:basis-1/2"
          variants={itemVariants}
        >
          <MapContainer center={MANCHESTER_CENTER} zoom={12} style={{ height: '100%', width: '100%' }}>
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
        </motion.div>

        {/* Booking Form Section */}
        <motion.div
          className="bg-background rounded-lg shadow-xl p-8 lg:basis-1/2 w-full lg:h-[720px]"
          variants={itemVariants}
        >



          <div className="h-full">
            <Tabs defaultValue="booking">
              <TabsList className='w-full mb-8'>
                <TabsTrigger value="booking">Booking</TabsTrigger>
                <TabsTrigger value="testimonial">Testimonial</TabsTrigger>
              </TabsList>
              <TabsContent value="booking">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <Label htmlFor="fullName" className="mb-2.5 ml-1 text-gray-300">
                      Full Name
                    </Label>
                    <Input
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-primary transition"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </motion.div>


                  <motion.div variants={itemVariants}>
                    <Label htmlFor="postCode" className="mb-2.5 ml-1 text-gray-300">
                      Post Code
                    </Label>
                    <Input
                      type="number"
                      name="postCode"
                      id="postCode"
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-primary transition"
                      required
                      value={formData.postCode}
                      onChange={handleChange}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Label htmlFor="phoneNumber" className="mb-2.5 ml-1 text-gray-300">
                      Service Type
                    </Label>

                    <Select onValueChange={(value) => setFormData({ ...formData, serviceType: +value })} >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Service Type" className='text-white' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="1">Installation</SelectItem>
                          <SelectItem value="2">Support</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Label htmlFor="phoneNumber" className="mb-2.5 ml-1 text-gray-300">
                      Phone Number
                    </Label>
                    <Input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-primary transition"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </motion.div>




                  <motion.div variants={itemVariants}>
                    <Label htmlFor="message" className="mb-2.5 ml-1 text-gray-300">
                      Message
                    </Label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="w-full px-5 py-3 border bg-gray-900 border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-primary transition"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button
                      className="w-full"
                      type="submit"
                    >
                      Book Now
                    </Button>
                  </motion.div>
                </form>
              </TabsContent>
              <TabsContent value="testimonial">
               <Comment/>
              </TabsContent>
            </Tabs>
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
}
