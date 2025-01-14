import ImgMegafono from '../assets/img/ImgMegafono.png';
import MobileMockup from '../assets/img/Mobile-Mockup.png'
import ProductCarousel from './ProductCarousel';

export default function ProductSection() {
  return (
    <section className="bg-[#752400] text-goldenBeige py-12 p-4" id='productos'>
      <div className="container  mx-auto px-4">
        <h2 className="text-6xl font-alice text-center mb-8">Nuestros Productos</h2>
        <p className="text-center text-xl mb-8">
          En APISER SAS, contamos con una variedad de productos apícolas de alta calidad que se adaptan a las necesidades de apicultores de todo Colombia. Explora nuestras categorías y encuentra el equipo perfecto para tu apiario.
        </p>
        <ProductCarousel />
      </div>

      {/* Sección de Nuevo Producto */}
      <div className="w-full p-6">
        <div className='flex justify-center items-center'>
          <div className="max-w-6xl">
            {/* Megafono */}
            <div className='relative flex items-center'>
              <img src={ImgMegafono} alt="Megaphone Icon" className="h-full object-contain w-24 z-10" />
              <div className='bg-goldenBeige text-2xl text-customOrange absolute left-10 font-bold h-10 w-80 text-right flex items-center justify-end px-4 rounded-tr-[20px] rounded-br-[20px]'>
                <span className="">NUEVO PRODUCTO</span>
              </div>
            </div>

            {/* Texto informativo */}
            <div>
              <p className="mt-4 text-goldenBeige max-w-[600px] text-xl font-semibold">
                Optimiza la gestión de tus colmenas con nuestra nueva App de Gestión de Apiarios (APITECH), desarrollada especialmente para
                apicultores que desean monitorear sus apiarios en tiempo real. Con la integración de dispositivos de monitoreo,
                podrás recibir datos precisos sobre la salud de tus colmenas, la producción de miel y otros indicadores clave,
                todo desde la comodidad de tu teléfono o computadora.
              </p>
            </div>
          </div>

          {/* Mockup */}
          <div className="h-80 relative z-10">
            <img
              src={MobileMockup}
              alt="APITECH App Mockup"
              className="w-full h-[650px]"
            />
          </div>
        </div>
      </div>
    </section >
  )
}

