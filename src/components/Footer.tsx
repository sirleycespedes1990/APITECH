
import LOGO_amarillo from "../assets/img/LOGO_amarillo.svg"  
import Facebook from "../assets/img/Facebook.png"
import iG from  "../assets/img/iG.png"
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
    return (
      <footer className="bg-[#752400] text-white w-full">
        <div className="grid grid-cols-5 gap-10">
          {/* Column 1: Logo and Description */}
          <div className="p-8  border-[#6c2911]">
            <img 
              src={LOGO_amarillo} 
              alt="APISER Logo" 
              className="h-20 mb-4"
            />
            <p className="text-sm mb-4 text-[#F2D291]">
              Comprometidos con el crecimiento y la innovación del sector apícola en Colombia
            </p>
            <p className="text-xs text-[#F2D291]">
              Todos los derechos reservados © 2024
            </p>
          </div>
  
          {/* Column 2: Privacy and Terms */}
          <div className="p-8  border-[#6c2911]">
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#F2D291]">Política de privacidad</a></li>
              <li><a href="#" className="text-[#F2D291]">Términos y condiciones</a></li>
            </ul>
          </div>
  
          {/* Column 3: Services */}
          <div className="p-8  border-[#6c2911]">
            <ul className="space-y-2 text-18pt">
              <li><a href="#" className="text-[#F2D291]">Servicios</a></li>
              <li><a href="#" className="text-[#F2D291]">Productos</a></li>
              <li><a href="#" className="text-[#F2D291]">APITECH</a></li>
            </ul>
          </div>
  
          {/* Column 4: Contact */}
          <div className="p-8 border-[#6c2911]">
            <div className="space-y- text-[#F2D291] text-18pt">
              <p>Contáctenos:</p>
              <p>3219856591</p>
              <p>apisersas@gmail.com</p>
              <div className="flex items-center">
              <FaWhatsapp className="text-[#F2D291] w-6 h-6 mr-2" />
              <a 
              href="https://wa.me/message/FOAVI6X7UGWPK1" target="_blank" rel="noopener noreferrer" 
              className="hover:underline text-[#F2D291]"
              >
              WhatsApp
            </a>
            </div>
          </div>
          </div>
          {/* Column 5: Social Icons */}
          <div className="p-8 items-start space-y-2 gap 10">
          <a href="#" className="text-[#F2D291] space-y-4 text-18pt transition-transform duration-500 transform hover:translate-y-4">
          Síguenos
          </a>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <img src={iG} alt="Instagram" width={40} height={40} className="rounded-full" />
                  <a href="https://www.instagram.com/apicultura_serrano/" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#F2D291] ">
                    Instagram
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <img src={Facebook} alt="Facebook" width={40} height={40} className="rounded-full" />
                  <a href="https://www.facebook.com/photo/?fbid=751403433665245&set=pcb.751403463665242" target="_blank" rel="noopener noreferrer" className="hover:underline text-[#F2D291] ">
                    Facebook
                  </a>
                </div>
              </div>
            
            </div>
          </div>
        
      </footer>
    )
  }
  
  