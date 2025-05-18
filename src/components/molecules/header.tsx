import React from 'react'
import { Button } from '../atoms/button';

function Header() {
  return (
    <div className='bg-[url("/images/header.jpg")] bg-cover bg-center h-[100vh] w-full text-white'>
      <div className='w-full h-full bg-[#00000052]'>
        <div className='container py-20'>
          <div className='text-6xl font-bold'>
            <p>
              We craft unique
            </p>
            <p>
              business ideas.
            </p>
          </div>
          <p>
            We're a fully dedicated corporate service agency collaborating with brands all over the world.
          </p>
          <Button>
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
