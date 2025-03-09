import { Activity, Shirt, Music, Smartphone } from 'lucide-react';  // Icônes disponibles dans Lucide React

const Centres: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around items-center space-y-8 lg:space-y-0 mt-10">
      {/* Activité physique */}
      <div className="flex flex-col items-center">
        <Activity size={30} className="text-orange-500" />
        <span className="mt-2 text-center">Sport</span>
      </div>

      {/* Mode */}
      <div className="flex flex-col items-center">
        <Shirt size={30} className="text-orange-500" />
        <span className="mt-2 text-center">Mode</span>
      </div>

      {/* Musique */}
      <div className="flex flex-col items-center">
        <Music size={30} className="text-orange-500" />
        <span className="mt-2 text-center">Musique</span>
      </div>

      {/* Technologie */}
      <div className="flex flex-col items-center">
        <Smartphone size={30} className="text-orange-500" />
        <span className="mt-2 text-center">Technologies</span>
      </div>
    </div>
  );
};

export default Centres;
