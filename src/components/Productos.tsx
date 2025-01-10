import { useState } from 'react'
import ImgMegafono from '../assets/img/ImgMegafono.png';
import Whasp from '../assets/img/Whasp.png';
import MobileMockup from '../assets/img/Mobile-Mockup.png'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AlzaEstandar from '../assets/img/AlzaEstandar.png'
import CuadroEstandar  from '../assets/img/CuadroEstandar.jpg'
import LaminaCera from '../assets/img/LaminaCera.jpg'
/*import { FaWhatsapp } from 'react-icons/fa';*/



const products = [
  {
    title: 'ALZA ESTANDAR',
    description: 'Fabricada en mocoro y parafinada.',
    image: `${AlzaEstandar}`,
  },
  {
    title: 'CUADRO ESTÁNDAR',
    description: 'Alambrado y fabricado en monocoro.',
    image: `${CuadroEstandar}`,
  },
  {
    
    
    title:'LAMINA DE CERA',
    description: 'Laminas de 60x20 cm de cera 100% pura.',
    image: `${LaminaCera}`,
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
    
    <section className="bg-[#752400] text-goldenBeige py-12 p-4">
        
        
        
      <div className="container  mx-auto px-4">
        <h2 className="text-3xl  font-alice   text-center mb-8">Nuestros Productos</h2>
        <p className="text-center text-18pt mb-8">
          En APISER SAS, contamos con una variedad de productos apícolas de alta calidad que se adaptan a las necesidades de apicultores de todo Colombia. Explora nuestras categorías y encuentra el equipo perfecto para tu apiario.
        </p>
        <div className="relative flex items-center justify-center mb-12">
          <button onClick={handlePrev} className="absolute left-0 z-10">
            <ChevronLeft className="w-8 h-8 text-white" />



          </button>
          <div className="flex overflow-hidden w-full max-w-2xl">
            {products.map((product, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full transition-transform duration-500 ${
                  index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className=" bg-[#f2d291] text-burntUmber  rounded-[1rem] p-4 mx-40 max-w-full max-h-[900px]  justify-center ">




                <div className="flex-grow flex items-center justify-center">
               
                  <img src={product.image} alt={product.title} className="max-w-full max-h-[300px] object-contain" />
                  </div>
                  <h3 className="text-xl font-bold mt-4 ">{product.title}</h3>
                  <p className="mb-10  text-18pt">{product.description}</p>
                  <a
                      href={`https://wa.me/message/FOAVI6X7UGWPK1?text=Hola, me interesa obtener más información sobre ${encodeURIComponent(product.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#009DB5] text-white px-6 py-2 rounded-3 flex items-center justify-center hover:bg-[#1f7576] transition-colors duration-300"
                    >
                      <img
                        src={Whasp}
                        alt="WhatsApp"
                        width={24}
                        height={50}
                        className="mr-2 "
                      />
                      <span className="text-white">Solicitar producto</span>
                    </a>
                  
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
        <div className="w-full  p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column - Megaphone and text */}
          <div className="flex flex-col items-start">
            <div className=" rounded-lg p-4 inline-flex items-center gap-3 mb-4">
              <div className="w-16 h-16 relative">
                <img
                  src={ ImgMegafono}
                  alt="Megaphone Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="bg-[#f2d291] text-xl text-bg-[#ff9300] ">NUEVO PRODUCTO</span>
            </div>
            <p className="mt-4 text-white">
              Optimiza la gestión de tus colmenas con nuestra nueva App de Gestión de Apiarios (APITECH), desarrollada especialmente para
              apicultores que desean monitorear sus apiarios en tiempo real. Con la integración de dispositivos de monitoreo,
              podrás recibir datos precisos sobre la salud de tus colmenas, la producción de miel y otros indicadores clave,
              todo desde la comodidad de tu teléfono o computadora.
            </p>
          </div>

          {/* Right column - Phone mockup */}
          <div className="flex justify-center">
            <div className="w-80 h-auto relative">
              <img
                src={MobileMockup}
                alt="APITECH App Mockup"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    </section>
  )
}

