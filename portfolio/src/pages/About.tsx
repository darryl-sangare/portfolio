import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {

  return (

    <>

    <div className=" flex flex-col lg:flex-row h-screen">
        <div className=" w-full h-2/3 md:h-full flex flex-col justify-center  items-center">
          <div className='bg-white p-5  shadow-xl  pt-8 pb-10  border-b-8 border-gray-200 '>
            <div className='text-center text-4xl mb-4'>A propos</div>
            <div className='flex justify-center items-center '>
                <img className='w-[20%] lg:w-[12%] rounded-full hover:scale-105 duration-300' src="src/assets/prof.jpg" alt="" />
                <div className='w-[50%] mr-28 ml-8 text-center'>
                    Actuellement en BUT Métiers du Multimédia et de l'Internet, parcours Développement et Dispositifs Interactifs, je suis passionné par
                le développement web et la cybersécurité. Je suis à la recherche d'une alternance pour la rentrée
               de septembre 2025 afin de continuer à développer mes compétences.
                </div>
            </div>
            <div className="text-center ">
              <button className="text-white bg-black py-2 px-4 rounded-3xl duration-300 hover:scale-105 mt-7">Télécharger mon CV</button>
            </div>




          </div>

        </div>

        {/* Partie Bleue en bas */}

      </div>
    
    </>

  
  );
};

export default About;
