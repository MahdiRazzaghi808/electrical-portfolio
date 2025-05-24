import React from 'react';
import { Button } from '../atoms/button';

function Header() {
  return (
    <div className='bg-[url("/images/header.jpg")] bg-cover bg-center h-[100vh] w-full text-white'>
      <div className='w-full h-full bg-[#00000080]'>
        <div className='container py-24'>
          <div className='flex flex-col gap-6 lg:max-w-xl mt-8'>
            <div className='text-4xl  md:text-6xl font-bold'>
              <p>
                Electric Power,
              </p>
              <p>
                Bright Ideas.
              </p>

            </div>
            <p className='text-md md:text-lg text-gray-200'>
              Delivering cutting-edge electrical engineering solutions from power systems to renewable energy, tailored to drive your projects forward with precision and reliability.
            </p>
            <Button className="w-fit text-[#010101] p-6 rounded-full bg-primary hover:bg-primary/90 ">
              Consult an Expert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
