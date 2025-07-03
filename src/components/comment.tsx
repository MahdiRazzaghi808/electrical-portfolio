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
import { usePostCreateTestimonial } from '@/api/services/core/Testimonial/CreateTestimonial/post/use-post-create-testimonial';

function Comment() {

    const [formData, setFormData] = useState({
        fullName: '',
        message: '',
    });
    const mutation = usePostCreateTestimonial({
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


    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
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
                    Submit
                </Button>
            </motion.div>
        </form>)
}

export default Comment