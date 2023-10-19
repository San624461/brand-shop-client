import React from 'react';

const Insta = () => {
    return (
        <div>
            <h1 className='text-4xl  mt-5 mb-2 font-bold text-center text-[#EDC10F] font-serif'> @gulpgroove</h1>

<p className='text-2xl  mb-10 font-bold text-center text-[#0a0904]'>Join us on our latest foodie adventures and discoveries on Instagram.</p>

            <div className="grid grid-cols-2 lg:grid-cols-4 ">
                <div>
                    <img className="h-[80%] w-[80%] mx-auto
                rounded-lg" src="https://images.unsplash.com/photo-1563589173312-476d8c36b242?auto=format&fit=crop&q=80&w=1915&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <img className="h-[80%] w-[80%] mx-auto rounded-lg" src="https://images.unsplash.com/photo-1553452118-621e1f860f43?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <img className="h-[80%] w-[80%] mx-auto rounded-lg" src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=1854&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <img className="h-[80%] w-[80%] mx-auto rounded-lg" src="https://images.unsplash.com/photo-1597249536924-b226b1a1259d?auto=format&fit=crop&q=80&w=1886&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>



        </div>
    );
};

export default Insta;