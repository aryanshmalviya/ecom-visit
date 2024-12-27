import { COUPON_CODES } from '@/sanity/lib/sales/couponCode'
import { getActiveSaleByCouponCode } from '@/sanity/lib/sales/getActiveSaleByCouponCode'
import React from 'react'

async function Banner() {

    const sale = await getActiveSaleByCouponCode('JESUS30')

    if (!sale?.isActive) {
        return null;
    }
    return (
        <div className='bg-gradient-to-r from-orange-600 via-amber-900 to-amber-950 px-6 py-10 mx-4 mt-2 rounded-lg shadow-lg'>
            <div className='container mx-auto flex items-center justify-between'>
                <div className='flex-1'>
                    <h2 className='text-3xl sm:text-5xl font-extrabold text-left mb-4 text-white'> 
                        {sale.title}
                    </h2>
                    <p className='text-left text-xl sm:text-3xl font-semibold mb-6 text-white'>
                        {sale.description}
                    </p>
                    <div className='flex'>
                        <div className='bg-white text-black py-4 px-6 rounded-full shadow-md transform hover:sacle-105 transition duration-300'>
                            <span className='font-bold text-base sm:text-xl'>
                                Use Code: {" "}
                                <span className='text-red-600'> {sale.couponCode} </span>
                                <span className='ml-2 font-bold text-base sm:text-xl'>
                                    for sale {sale.discountAmount}% OFF
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner