import { useState, useEffect } from 'react'
import ImgMegafono from '../assets/img/ImgMegafono.png';
import Whasp from '../assets/img/Whasp.png';
import productosData from '../assets/data/productos.json';

interface Producto {
  id: number;
  name: string;
  descripcion: string;
  images: string;
}





export default function ProductSection() {
  const [  productos, setProductos ] = useState<Producto[]>([])
  useEffect(() => {
    setProductos(productosData.productos);
  }, []);
  return (
    <section className="bg-red-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-4">NUESTROS PRODUCTOS</h2>
        <p className="text-lg text-white text-center mb-12">
          En Apiser, contamos con una variedad de productos
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productos.map((product, index) => (
            <div key={index} className="bg-amber-100 rounded-lg overflow-hidden shadow-lg">
              {/* Aquí se muestra solo la imagen específica del producto */}
              <div className="h-48 bg-gray-300">
                <img 
                  src={product.images} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-sm mb-4">{product.descripcion}</p>
                <div className="bg-sky-300 rounded-full py-2 px-4 flex items-center justify-center cursor-pointer hover:bg-sky-400 transition-colors">
                  <img src={Whasp} alt="WhatsApp Icon" className="mr-2 w-5 h-5" />
                  <span className="text-sm font-medium">Solicitar producto</span>
                </div>
              </div>
            </div>
          ))}
        </div>
       

        <div className="mt-16 bg-amber-400 rounded-lg p-6 flex items-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full mr-6">
          <img 
                src={ImgMegafono} 
                alt="Apicultor trabajando" 
                className="w-full md:h-[70vh] h-auto object-contain md:object-cover -mt-8 md:mt-0"
              />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">NUEVO PRODUCTO</h3>
            <p className="text-lg">
              OPTIMIZA LA GESTIÓN DE TUS COLMENAS CON NUESTRA NUEVA APP
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}