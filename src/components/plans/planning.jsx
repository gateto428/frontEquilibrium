import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { payPlanUser } from '../../redux/actions';
import { Link } from 'react-router-dom';

export default function Planning(props) {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [payPlan, setPayPlan] = useState({
    idPerson: props.idPerson,
    idPlan: props?.plan?.idPlan,
    dateStart: "2023-04-18",
    dateEnd: "2023-04-28",
    classTake: 0,
    payType: "CASH",
    payNumber: "N/A"
  });

  const payUser= () => {
    dispatch(payPlanUser(payPlan, props.token))
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 p-4 grid grid-flow-col auto-cols-max">
      <img  src={"/imges/logo.jpg"} alt="description" 
        className="object-contain h-56 sm:h-32 sm:w-32 rounded-t-lg"
      />
      <div className="p-4 text-center">
        <p className="mt-2 text-sm font-light text-center text-gray-700">
        {props?.plan?.namePlan}
        </p>
        <p></p>
        <br />
      </div>
      <div className="basis-1/4 pt-4 pl-2 inline-flex items-center justify-center grid grid-flow-row auto-rows-max gap-5">
            <button type="submit" onClick={payUser} className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
                Seleccionar
              </button>
              <Link to ={`/show_plan_adm/${props.plan.idPlan}`} >
              <button type="submit"  className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
                Ver detalles
              </button>
              </Link>
      </div>
      
    </div>
  );
}