import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Projet Alpha",
    description: "Une application innovante pour la gestion des tâches.",
    image: "src/assets/linux.png"
  },
  {
    id: 2,
    name: "Projet Beta",
    description: "Un site e-commerce performant et moderne.",
    image: "https://via.placeholder.com/600x400"
  },
  {
    id: 3,
    name: "Projet Gamma",
    description: "Une plateforme de mise en relation professionnelle.",
    image: "https://via.placeholder.com/600x400"
  },
  {
    id: 4,
    name: "Projet Delta",
    description: "Un outil d'analyse de données avancé.",
    image: "https://via.placeholder.com/600x400"
  }
];

export default function ProjectGrid() {
  return (
    <>
    <div className=" bg-white p-5  shadow-xl    border-b-8 border-gray-200  ">
      <h1 className="text-center text-4xl mb-10">projets</h1>

    
    
    
    
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center p-4">
              <h3 className="text-lg font-bold">{project.name}</h3>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>  
  );
}
