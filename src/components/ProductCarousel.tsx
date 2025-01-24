import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Whasp from '../assets/img/Whasp.png';

// import ProductCarousel from  

// Asegúrate de importar tus imágenes de productos
import AlzaEstandar from '../assets/img/AlzaEstandar.png'
import CuadroEstandar from '../assets/img/CuadroEstandar.jpg'
import LaminaCera from '../assets/img/LaminaCera.jpg'
import CuadroAlambrado from '../assets/img/CuadroAlambrado.jpg'
import OverolEsgrima from '../assets/img/OverolEsgrima.jpg'
import PiqueraMocoro from '../assets/img/PiqueraMocoro.jpg'
import PortanucleoMocoro from '../assets/img/PortanucleoMocoro.png'
import tacho_fabricado from '../assets/img/tacho_fabricado.png'

// ... importa más productos según sea necesario

const productos = [
  {
    nombre: 'ALZA ESTANDAR',
    descripcion: 'Fabricada en mocoro y parafinada.',
    imagen: AlzaEstandar,
  },
  {
    nombre: 'CUADRO ESTÁNDAR',
    descripcion: 'Alambrado y fabricado en monocoro.',
    imagen: CuadroEstandar,
  },
  {


    nombre: 'LAMINA DE CERA',
    descripcion: 'Laminas de 60x20 cm de cera 100% pura.',
    imagen: LaminaCera,
  },
  {


    nombre: 'CUADRO ALAMBRADO',
    descripcion: 'Laminas de 60x20 cm de cera 100% pura.',
    imagen: CuadroAlambrado,
  },
  {


    nombre: 'OVEROL ESGRIMA',
    descripcion: 'Laminas de 60x20 cm de cera 100% pura.',
    imagen: OverolEsgrima,
  },
  {


    nombre: 'PIQUERA MOCORO',
    descripcion: 'Laminas de 60x20 cm de cera 100% pura.',
    imagen: PiqueraMocoro,
  },
  {


    nombre: 'PORTA NUCLEO MOCORO',
    descripcion: 'Laminas de 60x20 cm de cera 100% pura.',
    imagen: PortanucleoMocoro,
  },
  {


    nombre: 'TACHO FABRICADO',
    descripcion: 'Laminas de 60x20 cm de cera 100% pura.',
    imagen: tacho_fabricado,
  },

  // ... agrega más productos según sea necesario
];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full px-4 py-12 bg-amber-100">
      <div className="relative px-8">
        <Slider {...settings} >
          {productos.map((product) => (
            <div key={product.nombre} className="px-2">
              <div className=" bg-[#f2d291] text-burntUmber  rounded-[1rem] p-4 w-full h-[500px]  justify-center ">
                <div className="flex-grow flex items-center justify-center">
                  <img src={product.imagen} alt={product.nombre} className="max-w-full h-[300px] object-fill" />
                </div>
                <h3 className="text-xl font-bold mt-4 ">{product.nombre}</h3>
                <p className="mb-10  text-18pt">{product.descripcion}</p>
                <a
                  href={`https://wa.me/message/FOAVI6X7UGWPK1?text=Hola, me interesa obtener más información sobre ${encodeURIComponent(product.nombre)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#009DB5] text-white px-6 py-2 rounded-3 flex items-center justify-center hover:bg-[#1f7576] transition-colors duration-300 rounded-custom"
                >
                  <img
                    src={Whasp}
                    alt="WhatsApp"
                    width={24}
                    height={50}
                    className="mr-2 "
                  />
                  <span className="text-white font-semibold">Solicitar producto</span>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
