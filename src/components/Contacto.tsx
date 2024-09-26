import {  MapPin, Mail, Phone } from "lucide-react"

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 bg-amber-700 text-white">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8">Contáctanos</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Información de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 mr-2" />
                      <p>123 Calle de las Abejas, Ciudad Miel, 12345</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 mr-2" />
                      <a href="mailto:info@apitech.com" className="hover:underline">info@apitech.com</a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 mr-2" />
                      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        +1 (234) 567-890 (WhatsApp)
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