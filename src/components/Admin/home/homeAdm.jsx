import React, { useEffect } from "react";
import Navbar from "./navBarHomeAdm";
import Package from "./package";
import { connect } from "react-redux";

const  HomeAdmin = (props) => {
    useEffect(() => {
      if(JSON.parse(localStorage.getItem("user"))?.rolType !== 'ADMINISTRATOR') window.location.href = "/";
      // eslint-disable-next-line
    }, [props]);

    return (
      <div class="overflow-auto">
        <Navbar />
        <div class="bg-gray relative px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="text-center ">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                EQUILIBRIUM
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">
                Estar bien no es solo no estar enfermo, estar bien es hacer lo
                que te gusta tranquilamente
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/"
                  class="bg-equilibrium rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200 transform bg-equilibrium rounded-md hover:bg-pink focus:outline-none focus:bg-pink"
                >
                  Inscribirse
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Elige tu plan
          </h1>
          <div className="p-6 grid grid-cols-4">
            <div>
              <Package />
            </div>
            <div>
              <Package />
            </div>
            <div>
              <Package />
            </div>
            <div>
              <Package />
            </div>
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Todo lo que necesitas
          </h1>
          <div className="p-6 grid grid-cols-3">
            <div>
              <img
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/250953813_1520961801603962_2332511799839337129_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHq-uPVIl4u4KwhCFN8UBY5TVhUiwgFK1FNWFSLCAUrUVtDRYmguRjc5Id3gZ_5oWP1Rua1iLMECo0wYsu8YHWH&_nc_ohc=nkpqBk8B_MwAX-CPrdD&_nc_ht=scontent-bog1-1.xx&oh=00_AfA_-ToURI4diH5UcyBZt4Da15-dXdeNT9OqPUInpbHR0w&oe=64178B63"
                alt=""
                class="object-contain h-96 w-192"
              />
            </div>
            <div>
              <img
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/248584288_1520961804937295_8188919443820238839_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEZ4V4j1cKY7WkH_y_UMZy7yVkqVLADNczJWSpUsAM1zKaRtMR_8qSsbjCM17jVbD-AMcZkGq5pB99tJ6O0J2Hd&_nc_ohc=_eVCr3gejIIAX9c_Yq1&_nc_ht=scontent-bog1-1.xx&oh=00_AfD9_oN7b8ukOweJtQw95uQwnVOCYvBwOI3CkAcgt1294w&oe=641651F5"
                alt=""
                class="object-contain h-96 w-192"
              />
            </div>
            <div>
              <img
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/250895856_1520961798270629_1370656252818679180_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFrAWpY6GdT5nNGPy2q1P33MoucGjf6kkEyi5waN_qSQWEs9HlDNnhbNvKUyZOcWiMgozzH4gCXENZSGf0NFO0K&_nc_ohc=1BL-p-OpqUwAX_RroB-&_nc_ht=scontent-bog1-1.xx&oh=00_AfBUskmNNZQEn9ecCRLoXu0ZybRJtLnepZls3dOy630l9w&oe=64176E7B"
                alt=""
                class="object-contain h-96 w-192"
              />
            </div>
          </div>
        </div>
        <div className="bg-equilibrium h-48 relative p-2"></div>
      </div>
    );
}

function mapStateToProps(state){
  return {
      user: state.user
  }
}
export default connect(mapStateToProps, null)(HomeAdmin);