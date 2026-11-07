import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { AuthContex } from "../../../assets/providers/AuthContex";

// Tailwind needs full class names to exist in the source, so map them here
const textColors = {
  white: "text-white",
  black: "text-black",
  gray: "text-gray-700",
};
const borderColors = {
  white: "border-white",
  black: "border-black",
  gray: "border-gray-700",
};

const links = [
  { to: "/", label: "Home" },
  { to: "/search", label: "Destination" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = ({ textColor = "white", logo, borderColor = "white" }) => {
  const { user, logOutUser } = useContext(AuthContex);

  const colorClass = textColors[textColor] ?? "text-amber-400";
  const borderColorClass = borderColors[borderColor] ?? "border-amber-400";

  const navLinks = links.map(({ to, label }) => (
    <li key={to}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `px-0 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent ${
            isActive
              ? "text-[rgb(252,183,0)] font-bold shadow-none"
              : `font-medium ${colorClass} hover:text-[rgb(252,183,0)]`
          }`
        }
      >
        {label}
      </NavLink>
    </li>
  ));

  //Logout user
  const handleLogout = (e) => {
    e.preventDefault();
    logOutUser()
      .then(() => alert("Logged out successfully!"))
      .catch((error) => console.log(error.message));
  };

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex items-center justify-between gap-6 px-6 py-6 lg:px-33.75">
        {/* Left: logo + mobile menu */}
        <div className="flex items-center gap-2">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-square"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${colorClass}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-none"
            >
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <Link to="/" className="shrink-0">
            <img src={logo} alt="Travel Guru" className="h-14 w-auto" />
          </Link>
        </div>

        {/* Middle: search + links */}
        <div className="hidden flex-1 items-center justify-center gap-12 lg:flex">
          <div className="relative w-92.5">
            <FaSearch
              className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 ${colorClass}`}
            />
            <input
              type="text"
              placeholder="Search your Destination..."
              className={`h-11 w-full rounded-sm border ${borderColorClass}/80 bg-transparent pl-12 pr-4 text-sm placeholder:${colorClass} focus:border-white focus:outline-gray-300 ${colorClass}`}
            />
          </div>

          <ul className="menu menu-horizontal items-center gap-10 p-0 shadow-none">
            {navLinks}
          </ul>
        </div>

        {/* Right: login/logout */}
        {user ? (
          <button
            onClick={handleLogout}
            className="btn rounded-sm border-none bg-[rgb(252,183,0)] px-7 font-medium text-black shadow-none hover:bg-amber-400"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn rounded-sm border-none bg-[rgb(252,183,0)] px-7 font-medium text-black shadow-none hover:bg-amber-400"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
