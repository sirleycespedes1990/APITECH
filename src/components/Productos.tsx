
import alza_estandar from './assets/img/alza_estandar.png';
import cuadro_alambrado from './assets/img/cuadro_alambrado.png';
import cuadro_estandar from './assets/img/cuadro_estandar.png';
import lamina_cera from './assets/img/lamina_cera.png';
import overol_esgrima from './assets/img/alza_estandar.png';
import piquera_mocoro from './assets/img/piquera_mocoro.png';
import portanucleo_mocoro from './assets/img/portanucleo_mocoro.png';
import tacho_fabricado from './assets/img/tacho_fabricado.png';


export default function Productos() {

  return (
      <section id="productos" className="py-20 bg-amber-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-amber-800">Nuestros Productos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Alza Estandar Fabricada En Mocoro y Prafinada", "Cuadro Estandar Alambrado Fabricado En Mocoro ", "Cuadro Alambrado y Con Cera Fabricado En Mocoro" ,"Lamina De Cera 100% Pura" , "Piquera Fabricada En Moncoro", "Portnucleo De 5 Cuadros Fabricado En Mocoro", "Overol Tipo Esgrima", "Tacho Fabricado "].map((product) => (
                <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={`https://boletindesalud.com.ar/wp-content/uploads/2020/09/miel-pura-abejas.jpg.webp?height=200&width=300`} alt={product} width={300} height={200} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-amber-700">{product}</h3>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}
