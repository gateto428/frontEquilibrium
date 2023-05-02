import React, {useEffect} from "react";
import Navbar from "../home/navBarHomeAdm";
import User from "./user";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux'
import { getAllUsers } from '../../../redux/actions';
const UserList = (props) =>  {
    const dispatch = useDispatch();
    const getUsers = async(offset, limit, token) =>{
        //await dispatch(getTotalPlanes(offset, limit, token));
        await dispatch(getAllUsers(offset, limit, token))
      }

    useEffect(() => {
        if(JSON.parse(localStorage.getItem("user"))?.rolType !== 'ADMINISTRATOR') window.location.href = "/";
        getUsers(0, 5, JSON.parse(localStorage.getItem("user"))?.pass);
        
        // eslint-disable-next-line
      }, []);

        return(
            <div className="overflow-auto max-w-full min-w-sd max-h-full">
                <Navbar/> 
                <div className="flex justify-center pt-8 text-4xl font-Monserrat text-center text-purple-700 ">
                    <h1>Usuarios</h1>
                </div>               
                <div className="pt-2 font-Monserrat text-right text-purple-700 mr-20">
                    <form method="get" action="/Create_user">
                        <button
                        type="submit"
                        className="w-48 px-2 py-2 tracking-wide text-white transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink"
                        >
                        Agregar Usuario
                        </button>
                    </form>
                </div>
                <div className="">
                    <div className="pl-10 pr-10">
                        {
                            props?.userList?.map(user => <User key={user?.idPerson} user={user}/>)
                        }
                    </div>
                </div>
            </div>
        );

}
function mapStateToProps(state){
  return{
    userList: state.userList
    //totalPlanes: state.totalPlanes
  }
}
export default connect(mapStateToProps, null)(UserList);