// components/sections/ElectricalEngineeringSection.tsx

import { Button } from "../atoms/button";

export default function ElectricalEngineeringSection() {
    return (
        <section className="bg-[url('/images/banner.jpg')] bg-cover bg-center">
            <div className="bg-[#00000060] w-full h-full  py-24 ">
                <div className=" mx-auto text-center container">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Electrical Engineering
                    </h2>
                    <p className="text-lg text-gray-200 leading-relaxed mb-8">
                        Electrical engineering is a field of engineering that focuses on the study and application of electricity, electronics, and electromagnetism. It plays a critical role in developing modern technologies such as power generation systems, communication networks, electronic devices, and automation.
                    </p>

                    <Button className="text-[#010101] p-6  rounded-full bg-primary hover:bg-primary/90 ">
                        Start a Project
                    </Button>
                </div>
            </div>

        </section>
    );
}
