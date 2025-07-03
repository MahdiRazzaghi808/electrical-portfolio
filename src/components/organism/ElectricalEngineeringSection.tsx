
import Link from "next/link";
import { motion } from "framer-motion";

export default function ElectricalEngineeringSection() {
    return (
        <section
            className="relative bg-cover bg-center"
            style={{ backgroundImage: "url('/images/banner.jpg')" }}
            aria-labelledby="electrical-heading"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 py-24 container mx-auto text-center px-4">
                <motion.h2
                    id="electrical-heading"
                    className="text-3xl md:text-4xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Reliable & Experienced Electrician in Manchester
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-200 leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Call Us Today At 07984653016 , 07999553838 We are ready to help 24 hour
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Link href="/booking" className="text-[#010101] px-8 py-4 rounded-full bg-primary hover:bg-primary/90 transition">
                        Click to Call
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
