import { useState, useEffect } from 'react'
import productosData from '../assets/data/productos.json';

interface Producto {
  id: number;
  descripcion: string;
  images: string;
}


export default function Productos() {

 const [  productos, setProductos ] = useState<Producto[]>([])

 
 useEffect(() => {
    setProductos(productosData.productos);
  }, []);


 console.log(productos)

  return (
      <section id="productos" className="py-20 bg-amber-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-amber-800">Nuestros Productos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {productos.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* <img src={`https://boletindesalud.com.ar/wp-content/uploads/2020/09/miel-pura-abejas.jpg.webp?height=200&width=300`} alt={`${product.id}`} width={300} height={200} className="w-full h-48 object-cover" /> */}
                  <img src={`${product.images}?height=200&width=300`} alt={`${product.id}`} width={300} height={200} className="w-full h-48 object-cover" />
                  {/* <img src={`${alza_estandar}?height=200&width=300`} alt={`${product.id}`} width={300} height={200} className="w-full h-48 object-cover" /> */}
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-amber-700">{product.descripcion}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}
