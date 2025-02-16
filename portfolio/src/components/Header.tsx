import { Home, Briefcase, Code, Mail, GraduationCap } from "lucide-react"; 
import { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md p-4 flex justify-around items-center border-t rounded-2xl transition-all duration-300 ${isHovered ? 'w-[45%] ' : 'w-[40%] '}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <NavItem icon={<Home size={24} />} label="Accueil" />
      <NavItem icon={<GraduationCap size={24} />} label="Parcours" />
      <NavItem icon={<Briefcase size={24} />} label="Compétence" />
      <NavItem icon={<Code size={24} />} label="Projet" />
      <NavItem icon={<Mail size={24} />} label="Contact" />
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
