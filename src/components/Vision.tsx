import apicultor from '../assets/img/apicultor.png'
import Rombo_amarillo from '../assets/img/Rombo_amarillo.png'

export default function Vision() {
  return (
    <div className="">
      <section 
        className="bg-[#eda900] py-12 " 
        style={{
          backgroundImage: `url(${Rombo_amarillo})`,

          backgroundSize: "170px 150px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        {/* Contenedor principal en flex-row para pantallas medianas y grandes */}
        <div className=" lg:w-1/2 mt-8 lg:mt-0 flex h-auto">
          
          {/* Imagen del lado izquierdo */}
          <div className=" hidden-50 pt-100 z-20">
          
            <img 
              src={apicultor} 
              alt="Apicultor trabajando" 
              className="max-w-[700px]" 
            />
          </div>
          
          {/* Texto del lado derecho */}
          <div className=" relative h-[500px]max-w-full space-y- pt-40">
          <div className="max-w-md"></div>
            <p className="text-[18pt] font-semibold text-[#752400] max-w-2xl">
              APISERT SAS es una empresa con sede en Santander, comprometida con el crecimiento 
              y la innovación del sector apícola en Colombia. Desde nuestros inicios, hemos trabajado 
              de la mano con apicultores locales y nacionales, ofreciendo productos de calidad y servicios 
              profesionales que mejoran la gestión y productividad de las colmenas. Con un enfoque en la 
              tecnología y la sostenibilidad, seguimos siendo pioneros en la apicultura moderna, brindando 
              soluciones para todo tipo de apicultores, desde los tradicionales hasta aquellos que buscan 
              integrar herramientas digitales avanzadas. 
            </p>
          </div>
          
        </div>
      </section>
    </div>
  )
}