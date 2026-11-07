import Navbar from "../Shared/Navbar/Navbar";
import logo from "../../assets/logos/logo-white.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const destinations = useLoaderData();
  console.log(destinations);

  return (
    <div className="relative">
      <Navbar textColor="white" logo={logo} borderColor="white" />
      <div className="hero min-h-screen bg-[url('../../../src/assets/images/home-bg.png')]">
        <div className="hero-overlay opacity-90"></div>
        <div className="hero-content max-w-300 text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-8xl font-bebas-neue uppercase">
              Cox's bazar
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link
              to="/booking"
              className="btn btn-warning inline-flex items-center gap-2.5"
            >
              Booking
              <FaArrowRight />
            </Link>
          </div>
          <div className="swiper-slider-activation"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
