import { NavLink, Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut,} = useAuth();

  return (
    <>
      <nav className="fixed top-0 right-0 w-full z-20 bg-white text-black shadow-md">
        <div
          data-aos="zoom-out"
          className="container sm:py-1 mx-auto px-2"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold text-xl">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <img src={logo} alt="logo" className="w-32" />
                {/* <img src={} alt="" className="h-16" /> */}
              </Link>
              {/* <span>TCJ Tourism</span> */}
            </div>
            <div className="flex items-center gap-4 justify-center p-2">
              <ul className="flex items-center gap-4">
                {!user && (
                  <>
                    <li className="flex gap-2 py-2">
                      <Link
                        to="login"
                        className="border-b-4 hover:border-[#42CE9F] text-[#282828] transition-all font-md text-md"
                      >
                        Login
                      </Link>
                    </li>
                    <li className="flex gap-2 py-2">
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
                  <div>
                    <ul className="flex items-center gap-6 ">
                      <li className="py-2">
                        <NavLink
                          to="/dashboard"
                          className="border-b-4 hover:border-[#42CE9F] text-[#282828] transition-all font-md text-md"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li className="py-2">
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
