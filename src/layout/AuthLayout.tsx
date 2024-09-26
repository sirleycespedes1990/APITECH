import Footer from '../components/Footer'
import Contacto from '../components/Contacto'
import Proyecto from '../components/Proyecto'
import Servicios from '../components/Servicios'
import Productos from '../components/Productos'
import Vision    from '../components/Vision'
import Navegacion from '../components/Navegacion'

const AuthLayout = () => {
    return (
            <div className="min-h-screen bg-amber-50">
                <Navegacion/>
                <main>
                     <Vision/>
                     <Servicios/>
                     <Productos/>
                     <Proyecto/>           
                    <Contacto/>
                </main>    
                <Footer/>
            </div>
    )
};

export default  AuthLayout ;