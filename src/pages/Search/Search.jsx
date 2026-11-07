import logo from "../../assets/logos/logo.png";
import Navbar from "../Shared/Navbar/Navbar";
import { useLoaderData } from "react-router";
import HotelRoomCard from "./HotelRoomCard";

import GoogleMapReact from "google-map-react";
import { googleAPIKey } from "../../googleAPIKey";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 11,
};

const Search = () => {
  const stays = useLoaderData();
  console.log(stays);
  return (
    <div className="relative pt-50">
      <Navbar textColor="black" logo={logo} borderColor="black" />
      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-7">
          {stays.map((stay) => (
            <HotelRoomCard key={stay.id} stay={stay} />
          ))}
        </div>
        <div style={{ height: "600px", width: "60%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleAPIKey }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};

export default Search;
