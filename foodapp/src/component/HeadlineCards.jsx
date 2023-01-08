import React from 'react'

function HeadlineCards() {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/*Card */}
            <div className='rounded-xl relative'>
                {/*Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-10'>Sun's Out, BOGO's Out</p>
                    <p className='px-2 pt-1'>Through 8/28</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?cs=srgb&dl=pexels-jonathan-borba-2983101.jpg&fm=jpg&_gl=1*6ripvw*_ga*MTYyMzEyMDE3My4xNjczMTg1NTky*_ga_8JE65Q40S6*MTY3MzE4NTU5NS4xLjEuMTY3MzE4NjkyNS4wLjAuMA..'
                    alt='/'
                />
            </div>
            <div className='rounded-xl relative'>
                {/*Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-10'>We Deliver Desserts</p>
                    <p className='px-2 pt-1'>Tasty Treats</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.pexels.com/photos/14122740/pexels-photo-14122740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    alt='/'
                />
            </div>
            <div className='rounded-xl relative'>
                {/*Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-10'>New Restaurants</p>
                    <p className='px-2 pt-1'>Added Daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?cs=srgb&dl=pexels-devon-rockola-954677.jpg&fm=jpg&_gl=1*i1kasf*_ga*MTYyMzEyMDE3My4xNjczMTg1NTky*_ga_8JE65Q40S6*MTY3MzE4NTU5NS4xLjEuMTY3MzE4ODI2Mi4wLjAuMA..'
                    alt='/'
                />
            </div>
        </div>
    )
}

export default HeadlineCards