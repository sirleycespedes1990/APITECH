import { useState } from 'react';
import LOGO_cafe from '../assets/img/LOGO_cafe.svg';

function Navegacion() {
  // Estado para manejar la sección activa
  const [activeSection, setActiveSection] = useState('');

  return (
    <nav className="  bg-burntUmber bg-opacity-10 shadow-md py-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo a la izquierda */}
        <div className="w-60 h-12">
          <img src={LOGO_cafe} alt="Logo" className="w-full h-full" />
        </div>

        {/* Botones de Navegación a la derecha */}
        <div className="flex space-x-2 sm:space-x-4 p-18  rounded-lg">
          {['productos', 'servicios', 'contactanos'].map((section) => (
            <button
              key={section}
              className={`px-4 py-2 rounded-md transition-all duration-300 transform text-18pt sm:text-base ${
                activeSection === section
                  ? 'bg-[#FF9300] text-white shadow-lg translate-y-[-2px]'
                  : 'bg-transparent text-red-900 hover:bg-amber-500 text-burntUmber font-weight: 700 '
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navegacion;
