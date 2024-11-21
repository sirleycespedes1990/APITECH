import cajon from '../assets/img/cajon.png';


export default function Mision() {
  return (
    <section className="bg-[#f2D291] py-2 relative left-0 overflow-visible">
      <div className="container mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center justify-between py-10 px-6">
          
          {/* Contenido de texto a la izquierda */}
          <div className="w-full lg:w-1/2 space-y- pt-100">
            <p className="text-[18pt] font-semibold text-[#752400] max-w-2xl">
              En APISER SAS, somos líderes en la comercialización de productos apícolas y en la prestación de servicios
              avanzados para apicultores en Santander y a lo largo de Colombia. Desde colmenas hasta la última
              tecnología en monitoreo de apiarios, nuestro objetivo es ayudar a los apicultores a optimizar su producción y
              mejorar la salud de sus abejas. Explora nuestros productos, descubre nuestros servicios y únete a la
              nueva era de la apicultura.
            </p>
            <div className="flex flex-wrap gap-4 text-12">
              <button className="bg-[#ff9300] text-[#752400] px-6 py-2
               rounded-[12px] hover:bg-[#ff9300] font-bold text-[18px] 
               transition-colors">
                Contáctanos
              </button>
              <a href="#" className="text-[#FF9300] hover:text-[#EDA900] transition-colors inline-block text-lg font-semibold">
                <span className="border-b border-[#FF9300]">Conoce nuestra nueva APP</span>
              </a>
            </div>
          </div>

          {/* Imagen a la derecha con posición absoluta */}
         
         
          <div className="absolute position  top-1/2 right-0 
          transform -translate-y-1/2 lg:transla -y-0 lg:top-[-70px]
           w-full max-w-[500px] h-[700px] pointer-events-none z-20">
            <img
              src={cajon}
              alt="Colmena moderna"
              className="object-contain w-full h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
} 