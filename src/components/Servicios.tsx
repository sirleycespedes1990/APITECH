
 
 import { useState } from 'react';
 import ManoDerecha from '../assets/img/ManoDerecha.png';
 import ManoIzquierda from '../assets/img/ManoIzquierda.png';
 import captura from '../assets/img/captura.png';
 import ImgRecoleccion from '../assets/img/ImgRecoleccion.png';
 import whatsp from '../assets/img/Whasp.png';
 import alert from '../assets/img/alert.png';
 
 export default function ServicesSection() {
   const [indicaciones] = useState([
     'Indicaciones iniciales',
     'Indicaciones avanzadas',
     'Indicaciones expertas',
   ]);
 
   const handleWhatsAppClick = (message: string | number | boolean) => {
     const encodedMessage = encodeURIComponent(message);
     window.open(`https://wa.me/+573000000000?text=${encodedMessage}`, '_blank');
   };
 
   const services = [
     {
       title: 'CAPACITACIONES PARA APICULTORES',
       description: 'Capacitaciones especializadas que permiten a los apicultores optimizar el manejo de sus colmenas.',
       list: [
         'Manejo eficiente de colmenas',
         'Control de plagas y enfermedades apícolas',
         'Tecnologías de monitoreo para apiarios',
         'Buenas prácticas para la cosecha de miel',
       ],
       buttonText: 'Fechas y precios',
       buttonIcons: [ManoIzquierda, ManoDerecha],
       imgSrc: null,
       indicaciones: true, // Bandera para mostrar indicaciones
     },
     {
       title: 'COSECHA PROFESIONAL',
       description:
         'Con nuestro servicio de cosecha profesional ayudamos en la optimización y maximización de la eficiencia y calidad en la recolección de miel Contamoscon equipos avanzados y un equipo de expertos que asegura una cosecha segura y efectiva, reduciendo el estres para las abejas y mejorando la calidad del producto final.',
       
       
       
       
       
       
       
         buttonText: 'Solicitar servicio',
       imgSrc: ImgRecoleccion,
       whatsappMessage: 'Hola, quiero solicitar el servicio de Cosecha Profesional.',
       whatsappIcon: whatsp,
     },
     {
       title: 'CAPTURA DE ENJAMBRES',
       description:
         'Ofrecemos un servicio especializado de captura para manejar enjambres en áreas urbanas o rurales . Nuestro equipo capacitado utiliza metodos seguros para capturar y reubicar enjambres de manera eficiente,asegurando la seguridad de las abejas y las personas.',
       buttonText: 'Solicitar servicio',
       imgSrc: captura,
       whatsappMessage: 'Hola, estoy interesado en el servicio de Captura de Enjambres.',
       whatsappIcon: alert,
     },
   ];
 
   return (
     <section className="w-full py-12 bg-[#8B2703]" id="servicios">
       <div className="container mx-auto px-4 md:px-6">
         {/* Texto de "Nuestros Servicios" en la parte superior */}
         <div className="text-center mb-12">
           <h2 className="text-6xl font-alice text-[#f2d291] mb-8">Nuestros Servicios</h2>
           <p className="text-[#f2d291] max-w-3xl mx-auto">
             En APISER SAS, no solo comercializamos productos apícolas, también ofrecemos servicios especializados
             para mejorar la gestión y el rendimiento de los apiarios. Nuestros servicios están diseñados para
             satisfacer las necesidades de apicultores en Santander y toda Colombia.
           </p>
         </div>
 
         {/* Contenedor de las tarjetas */}
         <div className="flex flex-wrap justify-center gap-8 p-0">
           {services.map((service, index) => (
             <div
               key={index}
               className="bg-[#F2d291] rounded-lg p-0 flex flex-col justify-between 
               text-[#8B2703] relative transform transition-transform duration-300 hover:scale-105 
               min-h-[500px] max-w-[350px] flex-grow overflow-hidden"
             >
               <div className="p-6 flex-grow">
                 <h3 className="text-xl font-bold text-[#8B2703] mb-4">{service.title}</h3>
                 <p className="text-sm text-gray-700 mb-4">{service.description}</p>
                 {service.list && (
                   <div>
                     <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                       {service.list.map((item, i) => (
                         <li key={i}>{item}</li>
                       ))}
                     </ul>
                   </div>
                 )}
                 {/* Indicaciones para la primera tarjeta */}
                 {service.indicaciones && (
                   <div className="mt-4">
                     <p className="text-sm font-semibold text-gray-800">Indicaciones:</p>
                     <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                       {indicaciones.map((indicacion, i) => (
                         <li key={i}>{indicacion}</li>
                       ))}
                     </ul>
                   </div>
                 )}
               </div>
               <div className="pt-4 w-full">
                 {service.whatsappMessage ? (
                   <button
                     onClick={() => handleWhatsAppClick(service.whatsappMessage)}
                     className="w-full bg-[#FF9300] text-white py-2 px-4  flex items-center justify-center gap-2"
                   >
                     <img src={service.whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
                     {service.buttonText}
                   </button>
                 ) : (
                   <div className="flex items-center justify-center bg-[#FF9300] rounded-custom px-4 py-2 hover:bg-[#e88b1f] transition-colors cursor-pointer">
                     <img src={ManoIzquierda[0]} alt="Mano izquierda" className="w-6 h-6" />
                     <span className="mx-2 text-[#752400] font-medium">{service.buttonText}</span>
                     <img src={ManoDerecha[1]} alt="Mano derecha" className="w-6 h-6" />
                   </div>
                 )}
                 {service.imgSrc && (
                   <div className="relative w-full mt-4">
                     <img
                       src={service.imgSrc}
                       alt={service.title}
                       className="w-full h-48 object-cover absolute bottom-0 left-0 right-0"
                     />
                   </div>
                 )}
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 }
 
 