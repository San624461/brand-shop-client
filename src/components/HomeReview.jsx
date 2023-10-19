import React from 'react';
import review from '../assets/review.mp4'
import '@dotlottie/player-component';
import review1 from '../assets/review1.png'
import review2 from '../assets/review2.png'
const HomeReview = () => {
    return (
        <div>
             <h1 className='text-4xl  mt-5 mb-5 font-bold text-center text-[#EDC10F] '>What Others Are Saying </h1>

            {/* main */}
            <div className='flex flex-col md:flex-col lg:flex-row bg-[#FCF5EF]'>
                <div>
                    <dotlottie-player
                        src="https://lottie.host/0a7525c2-b76e-40be-bbd6-1d8c4eae2649/pklDmqOTW2.json"
                        background="transparent"
                        speed="1"

                        loop
                        autoplay
                    ></dotlottie-player>
                </div>
                <div className='p-10 mt-9'>
                    <div className='bg-white mb-20 p-5'>
                        <h3 className='font-bold text-[#F9663A]'>Thank You So much for super fast delivery</h3>
                        <p className='font-semibold'>Yesterday I received my fast box. I was really impressed by the taste of the food</p>

                        <div className='flex gap-4 mt-4'>
                            <div className="avatar">
                                <div className="w-12 rounded-lg">
                                    <img src={review2} />
                                </div>
                                
                            </div>
                            <div>
                                    <h1 className='text-sm font-semibold'>Sonya Saha</h1>
                                    <p className='text-gray-400'>NY, USA</p>
                                </div>
                        </div>
                    </div>
                   
                    <div className='bg-white p-5'>
                        <h3 className='font-bold text-[#F9663A]'>Thank You So much for super fast delivery</h3>
                        <p className='font-semibold'>Yesterday I received my fast box. I was really impressed by the taste of the food</p>

                        <div className='flex gap-4 mt-4'>
                            <div className="avatar">
                                <div className="w-12 rounded-lg">
                                    <img src={review1} />
                                </div>
                                
                            </div>
                            <div>
                                    <h1 className='text-sm font-semibold'>Sonya Saha</h1>
                                    <p className='text-gray-400'>NY, USA</p>
                                </div>
                        </div>
                    </div>
                    

                </div>
            </div>

        </div>
    );
};

export default HomeReview;