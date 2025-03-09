import { useState } from "react";

import { motion } from "framer-motion";


export default function Home() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
        <div className="text-3xl absolute top-0 ">
            DS
        </div>
            <div className=" h-screen flex items-center justify-center">

                <div className="text-center">
                    <img 
                        className="w-[15%] mx-auto rounded-md  transition-transform duration-300 hover:scale-105" 
                        src="src/assets/profill.jpg" 
                        alt="profil" 
                    />
<div className="text-3xl font-bold mt-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
  DARRYL SANGARE
</div>

                    <div className="text-lg mt-2">Développement web - Cybersécurité</div>
                    <div className="m-4">
                    <button className="w-[10%] md:w-[6%] lg:w-[4%] transition-transform duration-300 hover:scale-110 ">
                        <img  src="src/assets/git.png" alt="" />
                    </button>
                    <button className="w-[10%] md:w-[6%] lg:w-[4%] transition-transform duration-300 hover:scale-110  ml-6">
                        <img  src="src/assets/link.png" alt="" />
                    </button>                        
                    </div>

                </div>


            </div>

        </>
    );
}
