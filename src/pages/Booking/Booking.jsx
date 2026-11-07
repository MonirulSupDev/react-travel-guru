import Navbar from "../Shared/Navbar/Navbar";
import logo from "../../assets/logos/logo-white.png";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  return (
    <div className="relative">
      <Navbar textColor="white" logo={logo} borderColor="white" />
      <div className="hero min-h-screen bg-[url('../../../src/assets/images/home-bg.png')]">
        <div className="hero-overlay opacity-90"></div>
        <div className="hero-content text-neutral-content justify-between w-full">
          <div className="max-w-md">
            <h1 className="mb-5 text-8xl font-bebas-neue uppercase">
              Cox's bazar
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi, cupiditate voluptatem et in. Quaerat fugiat ut
              assumenda excepturi exercitationem quasi. In deleniti.
            </p>
          </div>
          <div className="bg-white text-black p-10 rounded-2xl">
            <div className="flex flex-col gap-2 mb-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="origin" className="text-sm text-gray-400">
                  Origin
                </label>
                <select
                  defaultValue="Pick a font"
                  className="select select-ghost bg-gray-100 font-bold w-full h-15"
                  id="origin"
                >
                  <option disabled={true}>Pick origin</option>
                  <option>Dhaka</option>
                  <option>Khulna</option>
                  <option>Sylhet</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="destination" className="text-sm text-gray-400">
                  Destination
                </label>
                <select
                  defaultValue="Pick a font"
                  className="select select-ghost bg-gray-100 font-bold w-full h-15"
                  id="destination"
                >
                  <option disabled={true}>Pick destination</option>
                  <option>Cox's Bazar</option>
                  <option>Sundarban</option>
                  <option>Sajek</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4 mb-5">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400">From</label>
                <DatePicker
                  selected={from}
                  onChange={setFrom}
                  selectsStart
                  startDate={from}
                  endDate={to}
                  minDate={new Date()}
                  dateFormat="dd/MM"
                  placeholderText="dd/mm"
                  className="bg-gray-100 h-15 p-2 rounded-sm font-bold"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400">To</label>
                <DatePicker
                  selected={to}
                  onChange={setTo}
                  selectsEnd
                  startDate={from}
                  endDate={to}
                  minDate={from}
                  dateFormat="dd/MM"
                  placeholderText="dd/mm"
                  className="bg-gray-100 h-15 p-2 rounded-sm font-bold"
                />
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-warning w-full h-15">
                Start Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
