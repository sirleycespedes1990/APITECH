import {  useState } from 'react'
import { Menu, X } from "lucide-react"



export default function Navegacion() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }   

  return (
      <header className="bg-amber-700 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-white rounded-full mr-4">
              {/* Espacio para el logo */}
            </div>
            <h1 className="text-3xl font-bold">ApiTech</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="hover:text-amber-200">Inicio</a>
            <a href="#servicios" className="hover:text-amber-200">Servicios</a>
            <a href="#productos" className="hover:text-amber-200">Productos</a>
            <a href="#proyectos" className="hover:text-amber-200">Proyectos</a>
            <a href="#contacto" className="hover:text-amber-200">Contáctanos</a>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-amber-600 py-2">
            <a href="#inicio" className="block px-4 py-2 hover:bg-amber-500">Inicio</a>
            <a href="#servicios" className="block px-4 py-2 hover:bg-amber-500">Servicios</a>
            <a href="#productos" className="block px-4 py-2 hover:bg-amber-500">Productos</a>
            <a href="#proyectos" className="block px-4 py-2 hover:bg-amber-500">Proyectos</a>
            <a href="#contacto" className="block px-4 py-2 hover:bg-amber-500">Contáctanos</a>
          </div>
        )}
      </header> 
    )
}