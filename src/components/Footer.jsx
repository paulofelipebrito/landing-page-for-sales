import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Financials.</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} className='cursor-pointer hover:scale-125'/>
            <FaInstagram size={30} className='cursor-pointer hover:scale-125'/>
            <FaTwitterSquare size={30} className='cursor-pointer hover:scale-125'/>
            <FaGithubSquare size={30} className='cursor-pointer hover:scale-125'/>
            <FaDribbbleSquare size={30} className='cursor-pointer hover:scale-125'/>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>Analytics</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>Marketing</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>Commerce</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
        <ul>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>Pricing</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>Documentation</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>Guides</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>About</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>Blog</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>Jobs</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>Press</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>Claim</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>Policy</li>
            <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in-out duration-500'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
