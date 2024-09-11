import React from 'react';
import Carousel from './carrusel';
import clinica from '../assets/clinica.png';
import diente from '../assets/diente.png';
import hospital from '../assets/hospital.png';
import cancer from '../assets/cancer.png';
import busqueda from '../assets/busqueda.png';
import Navbar from './navbar';

const MainContent = () => {
  return (
    <div className="w-auto">
      <Navbar />
      <main className="flex flex-col md:flex-row">
        <div className="p-4">
          <div className='w-full flex p-4'>
            <section className="relative flex justify-center items-center">
              <Carousel />
            </section>
            {/* Contenedor Videos */}
            <aside className="p-4 md:w-1/3 hidden md:block">
              <div className="video-container relative mb-4 hover:cursor-pointer">
                <div className="video-overlay absolute inset-0 bg-black opacity-50"></div>
                <iframe className="w-full h-64" src="https://www.youtube.com/embed/eCjoNnS5k7Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="video-container relative hover:cursor-pointer">
                <div className="video-overlay absolute inset-0 bg-black opacity-50"></div>
                <iframe className="w-full h-64" src="https://www.youtube.com/embed/EJhMN9GGRbo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </aside>
          </div>

          {/* Botones accesos rapidos */}
          <section className="mt-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
              <button className="main-button bg-red-700 text-white py-2 px-4 rounded h-20 hover:animate-bounce ">Resultados de exámenes</button>
              <button className="main-button bg-red-700 text-white py-2 px-4 rounded h-20 hover:animate-bounce ">Cotiza tu cirugía</button>
              <button className="main-button bg-red-700 text-white py-2 px-4 rounded h-20 hover:animate-bounce " id="workInfoBtn">Informacion del trabajo</button>
              <button className="main-button bg-red-700 text-white py-2 px-4 rounded h-20 hover:animate-bounce ">Beneficios Dentales</button>
              <button className="main-button bg-red-700 text-white py-2 px-4 rounded h-20 hover:animate-bounce ">Toma de muestras a domicilio</button>
            </div>
          </section>

          {/* Nuestra Red */}
          <section className="mt-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Nuestra Red</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="service-item text-center hover:scale-105 transform transition-transform duration-300 cursor-pointer ">
            <img src={clinica} alt="Clinicas" className="mx-auto w-24 h-24 object-contain" />
            <h3 className="mt-2 text-lg font-semibold">Clínicas</h3>
          </div>
          <div className="service-item text-center hover:scale-105 transform transition-transform duration-300 cursor-pointer ">
            <img src={hospital} alt="Centros Médicos" className="mx-auto w-24 h-24 object-contain" />
            <h3 className="mt-2 text-lg font-semibold">Centros Médicos</h3>
          </div>
          <div className="service-item text-center hover:scale-105 transform transition-transform duration-300 cursor-pointer ">
            <img src={diente} alt="Clínicas Dentales" className="mx-auto w-24 h-24 object-contain" />
            <h3 className="mt-2 text-lg font-semibold">Clínicas Dentales</h3>
          </div>
          <div className="service-item text-center hover:scale-105 transform transition-transform duration-300 cursor-pointer ">
            <img src={cancer} alt="Instituto del Cáncer" className="mx-auto w-24 h-24 object-contain" />
            <h3 className="mt-2 text-lg font-semibold">Instituto del Cáncer</h3>
          </div>
          <div className="service-item text-center hover:scale-105 transform transition-transform duration-300 cursor-pointer ">
            <img src={busqueda} alt="Laboratorios" className="mx-auto w-24 h-24 object-contain" />
            <h3 className="mt-2 text-lg font-semibold">Laboratorios</h3>
          </div>
        </div>
      </section>
        </div>

        
      </main>
    </div>
  );
};

export default MainContent;