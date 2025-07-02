import BookingList from '@/components/templates/admin/booking-list';
import React from 'react'

const fakeBookings = [
    {
        id: 1,
        fullName: "Ali Ahmadi",
        postCode: "12345",
        serviceType: 1,
        phoneNumber: "09120000000",
        message: "I need urgent service.",
    },
    {
        id: 2,
        fullName: "Sara Jafari",
        postCode: "54321",
        serviceType: 2,
        phoneNumber: "09123456789",
        message: "Please call me on Saturday. ,dm;d .,nnm.nm, kln,m kjj;n  lbljsdfls ,sndks kljds sknd fksnfsns fsnd ad.knda dlsjbds fslnf sfsn",
    },
    {
        id: 3,
        fullName: "Mehdi Karimi",
        postCode: "67890",
        serviceType: 1,
        phoneNumber: "09129876543",
        message: "I have a question about pricing.",
    },
];


function Booking() {
    return (
        <div className='text-white'>
            <h1 className="text-2xl font-bold text-primary">Booking List</h1>
            <BookingList bookings={fakeBookings} />
        </div>
    )
}

export default Booking