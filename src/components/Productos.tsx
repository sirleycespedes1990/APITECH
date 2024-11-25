import { useState } from 'react'
import ImgMegafono from '../assets/img/ImgMegafono.png';
import Whasp from '../assets/img/Whasp.png';

import MobileMockup from '../assets/img/Mobile-Mockup.png'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    title: 'ALZA ESTANDAR',
    description: 'Fabricada en mocoro y parafinada.',
    image: '/assets/img/alza_estandar.png',
  },
  {
    title: 'CUADRO ESTÁNDAR',
    description: 'Alambrado y fabricado en monocro.',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    title: 'LAMINA DE CERA',
    description: 'Laminas de 60x20 cm de cera 100% pura.',
    image: '/placeholder.svg?height=200&width=300',
  },
  // Puedes agregar más productos aquí
]

export default function ProductSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <section className="bg-[#5c2c06] text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Nuestros Productos</h2>
        <p className="text-center mb-8">
          En APISER SAS, contamos con una variedad de productos apícolas de alta calidad que se adaptan a las necesidades de apicultores de todo Colombia. Explora nuestras categorías y encuentra el equipo perfecto para tu apiario.
        </p>
        <div className="relative flex items-center justify-center mb-12">
          <button onClick={handlePrev} className="absolute left-0 z-10">
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <div className="flex overflow-hidden w-full max-w-3xl">
            {products.map((product, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full transition-transform duration-500 ${
                  index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="bg-white text-black rounded-lg shadow-lg p-4 mx-2">
                  <img src={product.image} alt={product.title} width={300} height={200} className="mx-auto" />
                  <h3 className="text-xl font-bold mt-4">{product.title}</h3>
                  <p className="mt-2">{product.description}</p>
                  <img src={Whasp} alt={product.title} width={300} height={200} className="mx-auto bg-[#00bfa5] text-white hover:bg-[#00a086]" />
                  Solicitar Producto
                  
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="absolute right-0 z-10">
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
        <div className="flex justify-center mt-4 mb-12">
          {products.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-white' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
        
        {/* Sección de Nuevo Producto */}
        <div className="bg-[#ffa500] text-black p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">NUEVO PRODUCTO</h3>
          <p className="mb-4">
            Optimiza la gestión de tus colmenas con nuestra nueva App de Gestión de Apiarios (APITECH), desarrollada especialmente para apicultores que desean monitorear sus apiarios de manera eficiente. Con esta innovadora aplicación, podrás recibir datos precisos sobre la salud de tus colmenas, la producción de miel y otros indicadores clave, todo desde la comodidad de tu teléfono o computadora.
          </p>
          <div className="flex justify-center space-x-4">
            <img src = {ImgMegafono} alt="App Screenshot 1" width={150} height={200} className="rounded-lg" />
            <img src= {MobileMockup} alt="App Screenshot 2" width={150} height={200} className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
