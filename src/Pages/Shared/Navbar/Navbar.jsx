

// import { Link, NavLink } from "react-router";
// import Logo from "../../../components/Logo/Logo";
// import useAuth from "../../../hooks/useAuth";
// import { useState } from "react";

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = () => {
//     logout().catch(console.log);
//     setMenuOpen(false);
//   };



  

//   const links = (
//     <>
//       <li>
//         <NavLink className='text-black' to="/">Home</NavLink>
//       </li>
//       <li>
//         <NavLink className='text-black' to="/meals">Meals</NavLink>
//       </li>
//       <li>
//         <NavLink className='text-black' to="/about">About</NavLink>
//       </li>

//       <li>
//         <NavLink className='text-black' to="/contact">Contact US</NavLink>
//       </li>
//       <li>
//         <NavLink className='text-black' to="/dashboard">Dashboard</NavLink>
//       </li>
//     </>
//   );

//   return (
//     <div className="navbar sticky top-0  text-white shadow-sm px-4">
//       {/* Navbar Start */}
//       <div className="navbar-start">
//         <Link className="btn btn-ghost text-xl flex items-center gap-2" to="/">
//           <Logo />

//         </Link>
//       </div>

//       {/* Navbar Center */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{links}</ul>
//       </div>

//       {/* Navbar End */}
//       <div className="navbar-end flex items-center gap-2">



//         {!user && (
//           <>
//             <Link to="/login" className="btn btn-outline">
//               Login
//             </Link>
//             <Link to="/register" className="btn btn-neutral">
//               Register
//             </Link>
//           </>
//         )}

//         {user && (
//           <div className="relative">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="btn btn-ghost btn-circle avatar"
//             >
//               <img
//                 className="rounded-full w-10 h-10 object-cover"
//                 referrerPolicy="no-referrer"
//                 src={user?.photoURL || "https://i.ibb.co/2NfF0zF/default-avatar.png"}
//                 alt="profile"
//               />
//             </button>

//             {menuOpen && (
//               <ul className="absolute text-black right-0 mt-2 w-40 bg-base-100 shadow-lg rounded-lg menu p-2 z-50">
//                 <li>
//                   <Link onClick={() => setMenuOpen(false)} to="/profile">
//                     Profile
//                   </Link>
//                 </li>
//                 <li>
//                   <button onClick={handleLogout}>Logout</button>
//                 </li>
//               </ul>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { Link, NavLink } from "react-router";
import { useState } from "react";
import Logo from "../../../components/Logo/Logo";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout().catch(console.log);
    setMenuOpen(false);
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "text-black"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/meals"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "text-black"
          }
        >
          Meals
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "text-black"
          }
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "text-black"
          }
        >
          Contact Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "text-black"
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-white shadow-sm px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost text-black">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52 text-black"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl flex items-center gap-2">
          <Logo />
        </Link>
      </div>

      {/* Navbar Center (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-2">
        {!user && (
          <>
            <Link to="/login" className="btn btn-outline">
              Login
            </Link>
            <Link to="/register" className="btn btn-neutral">
              Register
            </Link>
          </>
        )}

        {user && (
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn btn-ghost btn-circle avatar"
            >
              <img
                className="rounded-full w-10 h-10 object-cover"
                referrerPolicy="no-referrer"
                src={
                  user?.photoURL ||
                  "https://i.ibb.co/2NfF0zF/default-avatar.png"
                }
                alt="profile"
              />
            </button>

            {menuOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-base-100 shadow-lg rounded-lg menu p-2 z-50 text-black">
                <li>
                  <Link
                    to="/profile"
                    onClick={() => setMenuOpen(false)}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
