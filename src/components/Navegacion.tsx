import { useState } from 'react';
import logo from '../assets/img/LOGO_cafe.svg';
import { useLocation } from 'react-router-dom';

function Navegacion() {
  const location = useLocation();
  // Estado para manejar la sección activa
  const [navigateOptions] = useState([
    { name: 'Productos', path: '#productos' },
    { name: 'Servicios', path: '#servicios' },
    { name: 'Contáctanos', path: '#Formulario' },
  ]);
  // const [activeSection, setActiveSection] = useState('');

  return (
    <nav className="  bg-burntUmber bg-opacity-10 shadow-md py-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo a la izquierda */}
        <div className="w-60 h-12">
          <a href="">
            <img src={logo} alt="Logo" className="w-full h-full" />
          </a>
        </div>

        {/* Botones de Navegación a la derecha */}
        <div className="flex space-x-2 sm:space-x-4 p-18  rounded-lg">
          {navigateOptions.map((section) => (
            <a
              key={section.name}
              className={`
                px-4 py-1 rounded-md transition-all duration-300 transform text-lg sm:text-base font-semibold text-burntUmber
                hover:scale-110 hover:text-white hover:cursor-pointer hover:bg-warmOrange rounded-custom
                ${location.pathname.includes(section.path) ? 'bg-warmOrange text-white shadow-lg' : ''}
                `}
              href={section.path}
            >
              {section.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navegacion;
