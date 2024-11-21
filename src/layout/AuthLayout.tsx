
import Navegacion from "../components/Navegacion.tsx";
import Titulo from "../components/Titulo.tsx";
import Mision from "../components/Mision.tsx";
import Vision from "../components/Vision.tsx";
/*import Productos from "../components/Productos.tsx";
import ProductosCarousel from "../components/Productos.tsx";
/*import Imagen from "../components/Imagen.tsx";
import Servicios from "../components/Servicios.tsx";
import Contactenos from "../components/Contactenos.tsx";
import Footer from "../components/Footer.tsx";*/

const AuthLayout = () => {
    return (
            <div className="min-h-screen bg-amber-50">
                <Navegacion/>
                <main>
                     <Titulo/>
                     <Mision/>
                     <Vision/>
                     {/*<Productos/> 
                     <ProductosCarousel/> 
                     {/*<Imagen/>        
                     <Servicios/>
                     <Contactenos/>*/}
                </main>     
                {/* <Footer/> */}
            </div>
    )
};

export default  AuthLayout ;