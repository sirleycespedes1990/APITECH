

export default function proyecto() {
  return (
    <div>
       <section id="proyectos" className="py-20 bg-amber-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-amber-800">Nuestros Proyectos</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {["Conservación de Abejas", "Investigación Apícola"].map((project) => (
                <div key={project} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-4 text-amber-700">{project}</h3>
                  <p>En ApiTech, nos comprometemos con el futuro de la apicultura. Nuestros proyectos de conservación e investigación buscan proteger a las abejas y mejorar las prácticas apícolas para un futuro sostenible.</p>
                </div>
              ))}
            </div>
          </div>
        </section> 
        
    
      
    </div>
  )
}
