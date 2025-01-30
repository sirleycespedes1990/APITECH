import cajon from '../assets/img/cajon.png';

export default function Mision() {
  const handleWhatsAppClick = () => {
    const phone = '+573219856591'; // Reemplaza con el número de teléfono de WhatsApp
    const message = 'Hola, estoy interesado en saber más sobre APISER SAS.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="bg-goldenBeige py-24 px-24 flex justify-center gap-10">
      {/* Contenido de texto a la izquierda */}
      <div>
        {/* Texto descriptivo */}
        <div>
          <p className="text-xl font-normal text-[#752400] max-w-2xl">
            hola ayudame a incluirle redireccion de waasap al boton , contactenos 
            En APISER SAS, somos líderes en la comercialización de productos apícolas y en la prestación de servicios
            avanzados para apicultores en Santander y a lo largo de Colombia. Desde colmenas hasta la última
            tecnología en monitoreo de apiarios, nuestro objetivo es ayudar a los apicultores a optimizar su producción y
            mejorar la salud de sus abejas. Explora nuestros productos, descubre nuestros servicios y únete a la
            nueva era de la apicultura.
          </p>
        </div>

        {/* Botones para contacto */}
        <div className="flex justify-around items-center mt-5">
          {/* Botón con redirección a WhatsApp */}
          <button
            className="bg-[#ff9300] text-[#752400] px-6 py-2 rounded-[12px] hover:bg-[#ff9300] font-bold text-lg transition-colors"
            onClick={handleWhatsAppClick} // Manejador de evento
          >
            Contáctanos
          </button>
          <a
            href="#"
            className="text-[#FF9300] hover:text-[#EDA900] transition-colors inline-block text-lg font-normal"
          >
            <span className="border-b border-[#FF9300]">Conoce nuestra nueva APP</span>
          </a>
        </div>
      </div>

      {/* Contenido de imagen */}
      <div className="h-[250px] relative flex justify-center items-center">
        <img
          src={cajon}
          alt="Colmena moderna"
          className="h-[700px]"
        />
      </div>
    </section>
  );
}
