import React from "react";
import single from '../components/assests/single.png'
import double from '../components/assests/double.png'
import triple  from '../components/assests/triple.png'
const Cards=()=>{
   return(
        <div className="w-full py-[10rem] px-4 bg-white">
           <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
           <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
           <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/"/>
           <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
           <p className="text-center font-bold text-4xl">$149</p>
           <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 "> 1 Granted User</p>
            <p className="py-2 border-b mx-8 "> Send upto 2GB</p>
           </div>
           <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start trial</button>
           </div>
           <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
           <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="/"/>
           <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
           <p className="text-center font-bold text-4xl">$299</p>
           <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">800 GB Storage</p>
            <p className="py-2 border-b mx-8 "> 2 Granted User</p>
            <p className="py-2 border-b mx-8 "> Send upto 5GB</p>
           </div>
           <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start trial</button>
           </div>
           <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
           <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/"/>
           <h2 className="text-2xl font-bold text-center py-8">Multi User</h2>
           <p className="text-center font-bold text-4xl">$499</p>
           <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8 "> 10 Granted User</p>
            <p className="py-2 border-b mx-8 "> Send upto 20GB</p>
           </div>
           <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Start trial</button>
           </div>
           </div>
        </div>
   );
}
export default Cards;