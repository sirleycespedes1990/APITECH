import apicultor from '../assets/img/apicultor.png'
import Rombo_amarillo from '../assets/img/Rombo_amarillo.png'

export default function Vision() {
  return (
    <section
      className="bg-customGold flex justify-center"
      style={{ backgroundImage: `url(${Rombo_amarillo})` }}
    >
      {/* Contenedor principal en flex-row para pantallas medianas y grandes */}
      <div className="relative">
        <img
          src={apicultor}
          alt="Apicultor trabajando"
          className="h-[600px]"
        />
      </div>

      {/* Texto del lado derecho */}
      <div className=" relative h-[500px] pt-40">
        <p className="text-xl font-normal text-[#752400] max-w-2xl">
          APISERT SAS es una empresa con sede en Santander, comprometida con el crecimiento
          y la innovación del sector apícola en Colombia. Desde nuestros inicios, hemos trabajado
          de la mano con apicultores locales y nacionales, ofreciendo productos de calidad y servicios
          profesionales que mejoran la gestión y productividad de las colmenas. Con un enfoque en la
          tecnología y la sostenibilidad, seguimos siendo pioneros en la apicultura moderna, brindando
          soluciones para todo tipo de apicultores, desde los tradicionales hasta aquellos que buscan
          integrar herramientas digitales avanzadas.
        </p>
      </div>
    </section>
  )
}