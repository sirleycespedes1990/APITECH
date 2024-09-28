import {  MapPin, Mail, Phone } from "lucide-react"
import { FaFacebook, FaInstagram, FaWhatsapp  } from "react-icons/fa"; 

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 bg-amber-700 text-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8">Contáctanos</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Direccion</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 mr-2" />
                      <p>Finca los totumos vereda la rayada, Santa Barbara Satander</p>
                      <a href="https://www.google.com/maps/search/Finca+los+totumos+vereda+la+ramada,+Santa+Barbara+Santander/@6.3926365,-73.423011,11z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkyNC4wIKXMDSoASAFQAw%3D%3D"></a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 mr-2" />
                      <a href="mailto:info@apitech.com" className="hover:underline">apisersas@gmail.com</a>
                    </div>
                    <div className="flex items-center">
                      <FaWhatsapp  className="w-6 h-6 mr-2" />
                      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        +57 (3219856591) WhatsApp 
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FaInstagram className="w-6 h-6 mr-2"/>
                      <a href="https://www.instagram.com/apicultura_serrano/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Instagram : APISER
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FaFacebook className="w-6 h-6 mr-2"/>
                      <a href="https://www.facebook.com/photo/?fbid=751403433665245&set=pcb.751403463665242" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Facebook : APISER
                      </a>
                    </div>
                  </div>
                </div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">Nombre</label>
                    <input type="text" id="name" className="w-full px-3 py-2 text-gray-700 rounded" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input type="email" id="email" className="w-full px-3 py-2 text-gray-700 rounded" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">Mensaje</label>
                    <textarea id="message" rows={4} className="w-full px-3 py-2 text-gray-700 rounded"></textarea>
                  </div>
                  <button type="submit" className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600">Enviar</button>
                </form>
              </div>
            </div>
      </section>
  )
}

export default Contacto