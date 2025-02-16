import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className=" bg-orange-500 lg:w-1/2 w-full h-2/3 md:h-full flex flex-col justify-center items-center">
        <div className='flex justify-center items-center '>
            <img className='w-[20%] rounded-full' src="src/assets/profil.jpg" alt="" />
            <h1 className='text-4xl ml-6 font-bold'>A PROPOS</h1>
        </div>
        <div className='text-center w-[60%] mx-auto mt-10' >
        Actuellement en BUT Métiers du Multimédia et de l'Internet, parcours Développement et Dispositifs Interactifs, je suis passionné par
         le développement web et la cybersécurité. Je suis à la recherche d'une alternance pour la rentrée 
        de septembre 2025 afin de continuer à développer mes compétences.
        </div>
        <div className='text-center'><button className='text-white bg-black py-2 px-4 rounded-3xl mt-7'>Télécharger mon CV</button></div>

      </div>

      <div className="bg-blue-500 lg:w-1/2 w-full h-1/3 md:h-full">
      </div>
    </div>
  );
};

export default About;
