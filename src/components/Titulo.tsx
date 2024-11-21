

import ImgPrincipal from '../assets/img/ImgPrincipal.png';

const Imagen = () => {
  return (
    <div className="relative h-[50vh]  w-screen overflow-hidden bg-cover bg-center">
      <img 
        src={ImgPrincipal} 
        alt="Fondo de colmenas" 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-burntUmber bg-opacity-60"></div>

      <div className="relative  flex items-center justify-center h-full w-full">
        <h2 className="text-[35pt] sm:text-[40pt] md:text-[51pt] lg:text-[51pt] xl:text-[51pt]
         text-goldenBeige font-alice text-center max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg 
         lg:max-w-[1366px] xl:max-w-[1366px] px-4">
          Impulsa la Productividad de tus Colmenas con Nosotros
        </h2>
      </div>
    </div>
  );

































};

export default Imagen;
