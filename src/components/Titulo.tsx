

import ImgPrincipal from '../assets/img/ImgPrincipal.png';

const Imagen = () => {
  return (
    <div className="relative h-[50vh]  overflow-hidden bg-cover bg-center">
      <img
        src={ImgPrincipal}
        alt="Fondo de colmenas"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-burntUmber bg-opacity-60"></div>

      <div className="relative flex items-center h-full w-full">
        <h2 className="text-6xl text-goldenBeige font-alice text-center w-full mx-20">
          Impulsa la Productividad de tus Colmenas con Nosotros
        </h2>
      </div>
    </div>
  );

































};

export default Imagen;
