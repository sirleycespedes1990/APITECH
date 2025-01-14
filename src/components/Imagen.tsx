import Rombo_amarillo from '../assets/img/Rombo_amarillo.png'
import ImgMiel from '../assets/img/ImgMiel.png'

const Imagen = () => {
  return (
    <div className="relative w-full bg-[#EDA900] overflow-hidden">
      {/* Fondo de panal */}
      <div
        className="absolute inset-0 opacity-90"
        style={{ backgroundImage: `url(${Rombo_amarillo})`, }}
      />

      {/* Contenedor Principal */}
      <div className="relative z-10 flex max-w-7xl mx-auto gap-8">
        <div className="aboslute">
          <img
            src={ImgMiel}
            alt="Miel"
            className="w-[400px] h-auto drop-shadow-2xl"
          />
        </div>
        <div className='flex flex-col items-center'>
          <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-b-[30px] border-b-burntUmber border-l-transparent border-r-transparent rotate-180"></div>
          <a href="" className="text-[#e1600e] text-lg font-bold underline cursor-pointer h-8">
            Conoce nuestra nueva APP
          </a>
        </div>
      </div>
    </div>
  )
}

export default Imagen




