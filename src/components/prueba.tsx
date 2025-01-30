

const prueba = () => {
  return (
    
      
  

<div className="flex flex-col md:flex-row bg-[#F6D596] p-8 rounded-[12px] gap-6">
{/* Columna izquierda: Formulario */}
<div className="flex-1 bg-[#FCE7C1] p-6 rounded-[12px] shadow-md">
  <h2 className="text-[#5C1F0B] text-xl font-bold mb-4">CONTACTANOS</h2>
  <p className="text-[#5C1F0B] mb-6">
    Si tienes alguna pregunta sobre nuestros productos o servicios, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.
  </p>
  <form className="space-y-4">
    <div>
      <label className="block text-[#5C1F0B] font-bold mb-2">Nombre:</label>
      <input
        type="text"
        className="w-full border border-[#E5A600] rounded-[12px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E5A600]"
        placeholder="Ingresa tu nombre"
      />
    </div>
    <div>
      <label className="block text-[#5C1F0B] font-bold mb-2">Email:</label>
      <input
        type="email"
        className="w-full border border-[#E5A600] rounded-[12px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E5A600]"
        placeholder="Ingresa tu email"
      />
    </div>
    <div>
      <label className="block text-[#5C1F0B] font-bold mb-2">Mensaje:</label>
      <textarea
        className="w-full border border-[#E5A600] rounded-[12px] px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-[#E5A600]"
        placeholder="Escribe tu mensaje"
      />
    </div>
    <button
      type="submit"
      className="bg-[#FF9300] text-[#5C1F0B] px-6 py-3 w-full rounded-[12px] flex items-center justify-center gap-2 hover:bg-[#E5A600] font-bold transition-colors"
    >
      <img src="/ruta-de-tu-imagen/flecha.png" alt="Flecha" className="w-5 h-5" />
      Enviar
    </button>
  </form>
</div>

{/* Columna derecha: Información */}
<div className="flex-1 bg-white p-6 rounded-[12px] shadow-md">
  <h2 className="text-[#5C1F0B] text-xl font-bold mb-4">INFORMACIÓN</h2>
  <ul className="space-y-4 text-[#5C1F0B]">
    <li className="flex items-center gap-2">
      <img src="/ruta-de-tu-imagen/correo.png" alt="Correo" className="w-5 h-5" />
      correodeapiser@algo.com
    </li>
    <li className="flex items-center gap-2">
      <img src="/ruta-de-tu-imagen/telefono.png" alt="Teléfono" className="w-5 h-5" />
      (57) 000 0000 000
    </li>
    <li className="flex items-center gap-2">
      <img src="/ruta-de-tu-imagen/ubicacion.png" alt="Ubicación" className="w-5 h-5" />
      Dirección de ubicación apiser
    </li>
    <li className="flex items-center gap-2">
      <img src="/ruta-de-tu-imagen/reloj.png" alt="Horario" className="w-5 h-5" />
      <div>
        Lunes a Viernes <br />
        08:00 a.m. – 12:00 p.m. <br />
        02:00 p.m. – 05:30 p.m.
      </div>
    </li>
  </ul>
</div>
</div>


    
  )
}

export default prueba
