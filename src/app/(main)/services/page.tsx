import FAQ from '@/components/organism/FAQ'
import PricingPlans from '@/components/organism/PricingPlans'
import ServicesSection from '@/components/organism/ServicesSection'
import React from 'react'

function page() {
    return (
        <div className='container'>
            <PricingPlans />
            <FAQ />
        </div>
    )
}

export default page