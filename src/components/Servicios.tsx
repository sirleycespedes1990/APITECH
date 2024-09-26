

export default function Servicios() {
  return (
    <div>
        <section id="servicios" className="py-20 bg-amber-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-amber-800">Nuestros Servicios</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Capacitación",
                  description: "Ofrecemos cursos y talleres para apicultores principiantes y avanzados, cubriendo temas desde el manejo básico de colmenas hasta técnicas avanzadas de producción."
                },
                {
                  title: "Captura de Enjambres",
                  description: "Nuestro equipo especializado se encarga de la captura segura y eficiente de enjambres, ayudando a proteger tanto a las abejas como a la comunidad."
                },
                {
                  title: "Asistencia Profesional",
                  description: "Brindamos asesoría experta y soluciones personalizadas para apicultores y empresas del sector, ayudándoles a optimizar su producción y resolver desafíos específicos."
                },
                {
                  title: "Cosecha",
                  description: "Realizamos servicios de cosecha profesional, garantizando la extracción de miel y otros productos apícolas de manera eficiente y manteniendo los más altos estándares de calidad."
                }
              ].map((service, index) => (
                <div key={service.title} className={`bg-amber-500 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 ${index % 2 === 0 ? 'bg-amber-500' : 'bg-amber-600'}`}>
                  <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-amber-100">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      
    </div>
  )
}
