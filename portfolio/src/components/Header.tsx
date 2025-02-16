import { Home, Briefcase, Code, Mail, GraduationCap } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav 
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-4 flex justify-around items-center border-t rounded-3xl transition-all duration-300 
        ${isHovered ? 'w-[88%]' : 'w-[85%]'} ${isHovered ? 'lg:w-[43%]' : 'lg:w-[40%]'}  ${isHovered ? 'md:w-[63%]' : 'md:w-[60%]'}`}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <NavItem icon={<Home size={20} />} label="Accueil" />
      
      <NavItem icon={<GraduationCap size={20} />} label="À propos" />
      
      <NavItem icon={<GraduationCap size={20} />} label="Parcours" />
      
      <NavItem icon={<Briefcase size={20} />} label="Compétence" />
      
      <NavItem icon={<Code size={20} />} label="Projet" />
      
      <NavItem icon={<Mail size={20} />} label="Contact" />
    </nav>
  );
};

const NavItem = ({ icon, label }: { icon: JSX.Element; label: string }) => {
  return (
    <div className="flex flex-col items-center text-gray-600 hover:text-black cursor-pointer">
      {icon}
      <span className="text-sm mt-1">{label}</span>
    </div>
  );
};

export default Header;
