
/*import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCarousel from  

// Asegúrate de importar tus imágenes de productos
import producto1 from '../assets/img/producto1.jpg';
import producto2 from '../assets/img/producto2.jpg';
import producto3 from '../assets/img/producto3.jpg';

// ... importa más productos según sea necesario

const productos = [
  { id: 1, nombre: "Alza Estándar", imagen: producto1, descripcion: "Fabricado en mocoro y parafinada" },
  { id: 2, nombre: "Producto 2", imagen: producto2, descripcion: "Descripción del producto 2" },
  { id: 3, nombre: "Producto 3", imagen: producto3, descripcion: "Descripción del producto 3" },
  // ... agrega más productos según sea necesario
];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
      <h2 className="text-3xl font-bold text-center mb-8">Nuestros Productos</h2>
      <div className="relative px-8">
        <Slider {...settings}>
          {productos.map((product) => (
            <div key={product.id} className="px-2">
              <ProductCarousel product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;*/
