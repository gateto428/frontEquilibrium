import React from "react";
import { deleteUsers, activateUser } from '../../../redux/actions';
import { useDispatch } from 'react-redux'

export default function User(props) {
  const dispatch = useDispatch();

  const changeSstate = async(e) => {
    if(e.target.name === "Inactivate") dispatch(deleteUsers(props.user.idPerson, JSON.parse(localStorage.getItem("user"))?.pass))
    if(e.target.name === "Activate") dispatch(activateUser(props.user.idPerson, JSON.parse(localStorage.getItem("user"))?.pass))
  }

  return (
    <div className="p-4">
      <div className=" relative box-border h-auto w-32 min-w-full hover:max-w-full p-4 border-2">
        <div className="absolute left-3 -top-3 bg-white">
          <h2>Usuario</h2>
        </div>
        <div className="flex flex-row">
          <div className="pr-4 basis-1/4">
            <img
              src={"/imges/logo.jpg"}
              className=" object-contain h-50 w-40 "
              alt=""
            />
          </div>
          <div>
          <p className="basis-2/4  text-xl font-light text-justify text-gray-700">CC:  {props.user.idPerson}</p>
            <p className="basis-2/4  text-xl font-light text-justify text-gray-700">Nombre:  {props.user.namePerson}</p>
            <p className="basis-2/4  text-xl font-light text-justify text-gray-700">Apellido:  {props.user.lastNamePerson}</p>
            <p className="basis-2/4  text-xl font-light text-justify text-gray-700">Fecha de Nacimiento:  {props.user.birthDatePerson}</p>
            <p className="basis-2/4  text-xl font-light text-justify text-gray-700">Correo:  {props.user.emailPerson}</p>
            <p className="basis-2/4  text-xl font-light text-justify text-gray-700">Telefono:  {props.user.phonePerson}</p>
            <p className="basis-2/4  text-xl font-light text-justify text-gray-700">Rol:  {props.user.rolType}</p>
            <p className="basis-2/4  text-xl font-light text-justify text-gray-700">State:  {props.user.isActive?"ACTIVE":"INACTIVE"}</p>
          </div>
          <div className="basis-1/4 pt-4 pl-2 inline-flex items-center justify-center grid grid-flow-row auto-rows-max gap-5 absolute inset-y-8 right-10">
            <form method="get" action={`/profile/${props.user.idPerson}`}>
              <button type="submit" className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
                Editar
              </button>
            </form>
            <button onClick={changeSstate} name={!props.user.isActive?"Activate":"Inactivate"} className="w-48 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink">
              {!props.user.isActive?"Activate":"Inactivate"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}