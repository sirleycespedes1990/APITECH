

import Rombo_amarillo from "../assets/img/Rombo_amarillo.png"
import RomboAbeja from "../assets/img/RomboAbeja.png"
import ImgFlecha from "../assets/img/ImgFlecha.png"

export default function Formulario() {
  return (
    <div className="w-full" id="">
      {/* Commitment Section */}

      <section className="bg-[#eda900] relative py-16">
        <div className="absolute inset-0" style={{
          backgroundImage: `url(${Rombo_amarillo})`,
          backgroundSize: '170px 150px',
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }} />




        <div className="relative z-10 container mx-auto px-4 py-8">
          <h2
            className="text-4xl text-[#752400] font-semibold text-center mb-8"
          >
            Estamos comprometidos con:
          </h2>



          <div className="flex flex-col md:flex-row  px-6 md:px-18 py-12">
            {/* Texto Izquierdo */}
            <div className="text-[#752400] [500px]max-w-full space-y- pt-40 absolute position  top-1/2 right-0 ">
              <div className="max-w-md"></div>
              <h3 className="text-2xl font-bold mb-4">CONSERVACIÓN DE ABEJAS</h3>
              <p className="max-w-2xl">
                Estamos profundamente comprometidos con el futuro de la apicultura. A través de nuestros proyectos de conservación e investigación, trabajamos para proteger a las abejas y promover prácticas apícolas sostenibles que aseguren la salud de los ecosistemas y el bienestar de las futuras generaciones.
              </p>
            </div>

            {/* Imagen Centrada */}
            <div className="flex justify-center items-center relative">
              <div className="absolute inset-0 w-[300px] h-[700x] md:w transform rotate-45 z-0"></div>
              <img
                src={RomboAbeja}
                alt="Apicultor trabajando"
                className="relative z-10 max-w-[350px] md:max-w-[700]"
              />
            </div>

            {/* Texto Derecho */}
            <div className="text-[#5C1F0B] w-full lg:w-1/2 space-y- pt-100 z-10">

              <h3 className="text-2xl font-bold mb-4">INVESTIGACIÓN APÍCOLA</h3>
              <p className="max-w-2xl">
                Impulsamos el futuro de la apicultura mediante la innovación y el conocimiento. Nuestros proyectos de investigación están orientados a mejorar las técnicas apícolas, optimizando la producción y la conservación de las abejas, pilares fundamentales para la sostenibilidad de este importante sector.
              </p>
              <div className="bg-[#F2D291] py-0">
      <div className="container mx-auto px-4 max">


        <div className="grid grid-cols-1 md:grid-cols-2 rounded-[12px]  gap-6">
          {/* Left Side - Contact Form */}
          <div className="space-y-8 max-50 mx-auto rounded-[12px] ">
            <h3 className="text-2xl mb-6 font-bold text-[#5C1F0B]">CONTÁCTANOS</h3>
            <p className="text-[#5C1F0B]">
              Si tienes alguna pregunta sobre nuestros productos o servicios,
              no dudes en ponerte en contacto con nosotros. Estamos aquí para
              ayudarte.
            </p>

            <form className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-[#5C1F0B] font-bold mb-2">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  className="w-full p-3 rounded-[12px] border border-[#E2C9A8]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#5C1F0B] font-bold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-[12px] border-[#E2C9A8]"
                />
              </div>

              <div>



                <label
                  htmlFor="mensaje"
                  className="block text-[#5C1F0B]  font-bold mb-2"
                >
                  Mensaje:
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  className="w-full p-3 rounded-[12px] border border-[#E2C9A8]"
                />
              </div>

              <button
  type="submit"
  className="bg-[#FF9300] text-[#5C1F0B] px-6 py-3 w-[580px] rounded-[12px] flex items-center  gap-2 hover:bg-[#E5A600] font-bold transition-colors"
>
  Enviar
  <img src={ImgFlecha} alt="Flecha" className="h-5 w-5" />
</button>

            </form>
          </div>

          {/* Right Side - Information Box */}
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h4 className="text-xl font-bold text-[#5C1F0B] mb-6">
              INFORMACIÓN
            </h4>
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-[#5C1F0B]">
                <span>📧</span>
                correodeapiser@algo.com
              </p>
              <p className="flex items-center gap-2 text-[#5C1F0B]">
                <span>📱</span>
                (+57) 000 0000 000
              </p>
              <p className="flex items-center gap-2 text-[#5C1F0B]">
                <span>📍</span>
                dirección de ubicación apiser
              </p>
              <div className="text-[#5C1F0B]">
                <p className="font-bold mb-2">Lunes a Viernes</p>
                <p>08:00 a.m. - 12:00 p.m.</p>
                <p>02:00 p.m. - 06:30 p.m.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

