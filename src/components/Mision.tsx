import cajon from '../assets/img/cajon.png';


export default function Mision() {
  return (
    <section className="bg-goldenBeige py-24 px-24 flex justify-center gap-10">
      {/* Conttenido de text a la izquierda */}
      <div>
        {/* Texto descriptivo */}
        <div>
          <p className="text-xl font-normal text-[#752400] max-w-2xl">
            En APISER SAS, somos líderes en la comercialización de productos apícolas y en la prestación de servicios
            avanzados para apicultores en Santander y a lo largo de Colombia. Desde colmenas hasta la última
            tecnología en monitoreo de apiarios, nuestro objetivo es ayudar a los apicultores a optimizar su producción y
            mejorar la salud de sus abejas. Explora nuestros productos, descubre nuestros servicios y únete a la
            nueva era de la apicultura.
          </p>
        </div>

        {/* Botones para contacto */}
        <div className='flex justify-around items-center mt-5'>
          <button className="bg-[#ff9300] text-[#752400] px-6 py-2 rounded-[12px] hover:bg-[#ff9300] font-bold text-lg transition-colors">
            Contáctanos
          </button>
          <a href="#" className="text-[#FF9300] hover:text-[#EDA900] transition-colors inline-block text-lg font-normal">
            <span className="border-b border-[#FF9300]">Conoce nuestra nueva APP</span>
          </a>
        </div>
      </div>

      {/* Contenido de imagen */}
      <div className='h-[250px] relative flex justify-center items-center'>
        <img
          src={cajon}
          alt="Colmena moderna"
          className="h-[700px]"
        />
      </div>
    </section>
  );
} 