import Rombo_amarillo from '../assets/img/Rombo_amarillo.png'
import ImgMiel from '../assets/img/ImgMiel.png'

const Imagen = () => {
  return (
    <div className="relative w-full bg-[#EDA900]">
      {/* Fondo de panal */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `url(${Rombo_amarillo})`,
          backgroundSize: '150px 150px',
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Contenedor Principal */}
      <div className="relative z-10 flex  justify-between max-w-7xl mx-auto p-8 gap-8">
        {/* Imagen de la miel (lado izquierdo) */}
        <div className="relative">
          <img
            src={ImgMiel}
            alt="Miel"
            className="w-[350px] h-auto drop-shadow-2xl"
          />
        </div>

        {/* Texto en el centro */}
        <div className="text-center md:text-left">
          <span className="text-[#e1600e] text-18pt md:text-4xl font-bold tracking-normal">
            Conoce nuestra nueva APP
          </span>
          <div className="h-1 bg-[#e1600e] -[200px] mx-auto md:mx-0 mt-0"></div>
        </div>

        {/* Imagen del móvil flotante (lado derecho) */}
        <div className="hidden md:block relative">
          <img
            src={Rombo_amarillo} // Usa aquí tu imagen del móvil
            alt="Móvil"
            className="w-[250px] h-auto drop-shadow-2xl rotate-6"
          />
        </div>
      </div>
    </div>
  )
}

export default Imagen




