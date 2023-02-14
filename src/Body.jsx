import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo_text from "/src/img/logo/text_logo.png";
import logo_circle from "/src/img/logo/circle_logo.svg";
import { getDocs, collection } from "firebase/firestore";



const Body = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [adultos, setAdultos] = useState(null);
  const [crianças, setCrianças] = useState(null);
  

  const handleReservation = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut || !adultos) {
      alert("Por favor, preencha as datas de check-in, check-out e o número de adultos.");
      return;
    }
    alert(`Reservado para o período de ${checkIn.toDateString()} a ${checkOut.toDateString()}.`);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  
  return (
    <div className="bg-orange-50 relative h-screen">

      <div className="px-16">
        <img 
          src={logo_text} 
          className="mx-auto my-1 h-50"
          alt="MAYON"
        />
        <div className="flex h-64 mx-auto rounded-3xl bg-local bg-center" style={{backgroundImage: `url(/src/img/areacomum/pool10.jpg)`}}>
        </div>
        <div className=" bg-white px-10 mt-1 text-left p-1 opacity-75 rounded-3xl">
        <form className="flex flex-auto m-auto">
          <DatePicker
            selected={checkIn}
            onChange={setCheckIn}
            placeholderText="Check-in"
            className="mb-2 form-control w-13"
          />
          <DatePicker
            selected={checkOut}
            onChange={setCheckOut}
            placeholderText="Check-out"
            className="mb-2 form-control w-13"
          />
          <input
            type="number"
            placeholder="Adultos"
            min="1"
            max="4"
            onChange={(e) => setAdultos(parseInt(e.target.value, 10))}
            className="mb-2 form-control w-13"
          />
          <input
            type="number"
            placeholder="Crianças"
            min="0"
            max="3"
            onChange={(e) => setCrianças(parseInt(e.target.value, 10))}
            className="mb-2 form-control w-13"
          />
        </form>
        <button className="mt-4 bg-orange-700 text-white p-2 rounded hover:bg-orange-300" onClick={handleReservation}>
            Reserve
        </button>
        </div>
      </div>
      <img
        src={logo_circle}
        className="h-20 absolute top-12 left-12 cursor-pointer "
        alt="logo"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <nav
        className={`fixed right-10 bottom-15 z-10 bg-white p-5 rounded-lg shadow-md transition ease-in-out duration-150 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <a className="block font-medium text-lg text-gray-800 hover:text-gray-600" href="#">
          Home
        </a>
        <a className="block font-medium text-lg text-gray-800 hover:text-gray-600 mt-5" href="#">
          About
        </a>
        <a className="block font-medium text-lg text-gray-800 hover:text-gray-600 mt-5" href="#">
          Contact
        </a>
      </nav> 


      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-orange-700 text-opacity-50">
          Onde o tempo não tem pressa
        </h1>
        <p className="text-gray-600">e a preguiça é mais gostosa..</p>
      </div>

      const []

    </div>
  );
};

export default Body;
