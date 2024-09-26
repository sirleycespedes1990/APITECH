

export default function Productos() {

  return (
      <section id="productos" className="py-20 bg-amber-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-amber-800">Nuestros Productos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Miel Pura", "Propóleo", "Jalea Real"].map((product) => (
                <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={`https://boletindesalud.com.ar/wp-content/uploads/2020/09/miel-pura-abejas.jpg.webp?height=200&width=300`} alt={product} width={300} height={200} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2 text-amber-700">{product}</h3>
                    <p>Nuestros productos son 100% naturales y de la más alta calidad. Cosechados y procesados con cuidado para preservar todos sus beneficios nutricionales y propiedades curativas.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}
