import React from 'react';
export default function DetailPlan(props){
    return (
        <div className='bg-white'>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white border-2 rounded-lg shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-purple-700">
                        Detalles de tu plan
                    </h1>
                    <h2 className="p-4">
                    {props?.plan?.namePlan?props?.plan?.namePlan:"No hay plan Activo"}: {props?.plan?.descriptionPlan}. 
                    {props?.plan?.namePlan?`costo: $ ${props?.plan?.costPlan}`:null}
                    </h2>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
                            Ver Historial
                        </button>
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
                            Renovar
                        </button>
                    </div>
                </div>
            </div>
        </div> 
        );
}