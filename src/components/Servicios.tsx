
 
 import ManoDerecha from '../assets/img/ManoDerecha.png';
 import ManoIzquierda from '../assets/img/ManoIzquierda.png';
 import captura from '../assets/img/captura.png';
 import ImgRecoleccion from '../assets/img/ImgRecoleccion.png';


export default function ServicesSection() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573000000000', '_blank');
  };

  return (
    <section className="w-full py-12 bg-[#8B2703]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Nuestros Servicios</h2>
          <p className="text-white/90 max-w-3xl mx-auto">
            En APISER SAS, no solo comercializamos productos apícolas, también ofrecemos servicios
            especializados para mejorar la gestión y el rendimiento de las apiarios. Nuestros servicios están
            diseñados para satisfacer las necesidades de apicultores en Santander y toda Colombia.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 max-w-xl mx-auto">
          {/* Tarjeta de Capacitaciones */}
          <div className="bg-[#F2d291] rounded-lg shadow-lg overflow-hidden flex-1 max-w-sm">
            <div className="p-4 ">
              <h3 className="text-xl font-bold text-[#8B2703] mb-4">
                CAPACITACIONES PARA APICULTORES
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-700">
                  Capacitaciones especializadas que permiten a los apicultores optimizar
                  el manejo de sus colmenas.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-800">Capacitaciones disponibles:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Manejo eficiente de colmenas</li>
                    <li>Control de plagas y enfermedades apícolas</li>
                    <li>Tecnologías de monitoreo para apiarios</li>
                    <li>Buenas prácticas para la cosecha de miel</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="w-full flex items-center justify-center bg-[#FF9300] rounded-md px-4 py-2 hover:bg-[#e88b1f] transition-colors cursor-pointer">
                <img 
                  src={ManoIzquierda}
                  alt="" 
                  className="w-6 h-6 opacity-80"
                />
                <span className="mx-2 text-white font-medium">Fechas y precios</span>
                <img 
                  src={ManoDerecha}
                  alt="" 
                  className="w-6 h-6 opacity-80"
                />
              </div>
            </div>
            </div>

          {/* Tarjeta de Cosecha */}
          <div className="bg-[#F2d291] rounded-lg shadow-lg overflow-hidden flex-1 max-w-sm flex-col">
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-[#8B2703] mb-4">
                COSECHA PROFESIONAL
              </h3>
              <p className="text-sm text-gray-700">
                Con nuestro servicio de cosecha profesional ayudamos en la optimización
                y maximizar la eficiencia y calidad en la recolección de miel. Contamos
                con equipos avanzados y un equipo de asesores que asegura una
                cosecha segura y efectiva, reduciendo el estrés para las abejas
                y mejorando la calidad del producto final.
              </p>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-[#FF9300] text-white py-2 px-4  rounded-md  transition-colors"
              >
                Solicitar servicio
              </button>
              <div className="w-full h-40 relative flex ">
                <img
                  src={ImgRecoleccion}
                  alt="Cosecha profesional"
                  className="w-full h-full object-cover rounded-md "
                />
              </div>
            </div>
            </div>

          {/* Tarjeta de Enjambres */}
          <div className="bg-[#F2d291] rounded-lg shadow-lg overflow-hidden flex-1 max-w-sm ">
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#8B2703] mb-4">
                CAPTURA DE ENJAMBRES
              </h3>
              <p className="text-sm text-gray-700">
                Ofrecemos un servicio especializado de captura con un amplio equipo
                ayudar a la comunidad a manejar situaciones de enjambres en áreas
                urbanas o rurales. Nuestro equipo capacitado utiliza métodos seguros
                para capturar y reubicar enjambres de manera eficiente, asegurando la
                seguridad de las abejas y las personas.
              </p>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-[#FF9300] text-white py-2 px-4 rounded-md transition-colors"
              >
                Solicitar servicio
              </button>
              <div className="w-full h-40 relative">
                <img
                  src={captura}
                  alt="Captura de enjambres"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}