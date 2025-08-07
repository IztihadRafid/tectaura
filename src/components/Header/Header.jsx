import React from 'react';
import header_img from "../../assets/admin-icons/header_img.jpg"

const Header = () => {
    return (
        <div className='relative lg:w-7xl md:w-4xl w-[450px] mx-auto my-10'>
            <div>
                <img className='border rounded-2xl' src={header_img} alt="" />
            </div>
            <div className='absolute inset-0 flex items-center mx-10 '>
                <div className='space-y-2'>
                    <h1 className="text-xl md:text-5xl lg:text-6xl font-bold">Level Up Your Setup</h1>
                    <p className="text-lg md:text-2xl">Premium Keyboards, Mice, Monitors & More</p>
                    <p className=" md:text-lg text-sm italic">Top-tier accessories for every gamer, creator, and pro.</p>
                    <a href="#shop" className="bg-white btn btn-outline hover:bg-black text-black hover:text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                        Shop Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;