import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../../assets/images/logo.png";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logOut, createUser } = useAuth();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // NavLink
  const navLink = (
    <>
      <li className="py-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-[#42CE9F] text-[#282828] font-md text-md"
              : "text-[#282828] border-none font-md text-md"
          }
        >
          Home
        </NavLink>
      </li>

      <li className="py-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-[#42CE9F] text-[#282828] font-md text-md"
              : "text-[#282828] border-none font-md text-md"
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-20 bg-white text-black shadow-md">
        <div
          data-aos="zoom-out"
          className="container py-3 sm:py-1 mx-auto px-4"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold text-xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={logo} alt="logo" className="w-32" />
                {/* <img src={} alt="" className="h-16" /> */}
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 ">{navLink}</ul>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <ul className="flex items-center gap-4">
                {!user && (
                  <>
                    <li className="flex gap-2">
                      <Link
                        to="login"
                        className="border-b-4 hover:border-[#42CE9F] text-[#282828] transition-all font-md text-md"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="flex gap-2">
                      <NavLink
                        to="register"
                        className="border-b-4 hover:border-[#42CE9F] text-[#282828] transition-all font-md text-md"
                      >
                        Sign-up
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>

              {user && (
                <div className="flex gap-4 items-center">
                  <div className="hidden md:block">
                    <ul className="flex items-center gap-6 ">
                      <li className="py-4">
                        <NavLink
                          to="/dashboard"
                          className="border-b-4 hover:border-[#42CE9F] text-[#282828] transition-all font-md text-md"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li className="py-4">
                        <button
                          onClick={logOut}
                          className="border-b-4 hover:border-[#42CE9F] text-[#282828] transition-all font-md text-md"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown dropdown-end z-50">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div
                        title={user?.displayName}
                        className="w-10 rounded-full"
                      >
                        <img
                          referrerPolicy="no-referrer"
                          alt="User Profile Photo"
                          src={user?.photoURL}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Mobile Hamburger icon */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className=" cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
