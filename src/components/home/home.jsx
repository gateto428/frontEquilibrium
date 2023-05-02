import React, { Component } from 'react';
import Navbar from './navBarHome';
import Package from './package';

export class Home extends Component {
  render() {
    return (
      <div className="overflow-auto">
        <Navbar />
        <div className="bg-gray relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-10 sm:py-24 lg:py-32">
            <div className="text-center ">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                EQUILIBRIUM
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Estar bien no es solo no estar enfermo, estar bien es hacer lo que te gusta tranquilamente
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/Create_user"
                  className="bg-equilibrium rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink"
                >
                  Inscribirse
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />  
        <div className="p-5">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Elige tu plan
          </h1>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-3/4 mx-auto">
            <div><Package /></div>
            <div><Package /></div>
            <div><Package /></div>
            <div><Package /></div>
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Todo lo que necesitas
          </h1>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <img  src={"/imges/logo.jpg"} alt="description" />
            </div>
            <div>
              <img  src={"/imges/logo.jpg"} alt="description" />
            </div>
            <div>
              <img  src={"/imges/logo.jpg"} alt="description" />
            </div>
          </div>
        </div>
        <div className="bg-equilibrium h-20 sm:h-48 relative p-2">
        </div>
      </div>
    );
  }
}

export default Home;
