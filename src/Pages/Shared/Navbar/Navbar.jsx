// import React from 'react';
// import Logo from '../../../components/Logo/Logo';
// import { Link, NavLink } from 'react-router';

// const Navbar = () => {
//      const links = <>
//       <li><NavLink to='/'>Home</NavLink></li>
//       <li><NavLink to='/meals'>Coverage</NavLink></li>


//     </>
//     return (
//         <div className="navbar bg-base-100 shadow-sm">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//       </div>
//       <ul
//         tabIndex="-1"
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//         {
//           links
//         }
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl"><Logo></Logo></a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       {
//         links
//       }
//     </ul>
//   </div>
//   <div className="navbar-end">
//   <Link to='/login' className='btn'>Login</Link>
//   </div>
// </div>
//     );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link, NavLink } from "react-router";
// import Logo from "../../../components/Logo/Logo";
// import useAuth from "../../../hooks/useAuth";

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLogout = () => {
//     logout().catch(console.log);
//    setMenuOpen(false);
//   };

//   const links = (
//     <>
//       <li>
//         <NavLink to="/">Home</NavLink>
//       </li>
//       <li>
//         <NavLink to="/meals">Meals</NavLink>
//       </li>
//     </>
//   );

//   return (
//     <>
//       <div className="navbar bg-base-100 shadow-sm px-4">
//         {/* Navbar Start */}
//         <div className="navbar-start">
//           <Link className="btn btn-ghost text-xl flex items-center gap-2" to="/">
//             <Logo />
//             <span>Zap-Shift</span>
//           </Link>
//         </div>

//         {/* Navbar Center */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{links}</ul>
//         </div>

//         {/* Navbar End */}
//         <div className="navbar-end flex items-center gap-2">
//           {!user && (
//             <>
//               <Link to="/login" className="btn btn-outline">
//                 Login
//               </Link>
//               <Link to="/register" className="btn btn-neutral">
//                 Register
//               </Link>
//             </>
//           )}

//           {user && (
//             <button
//               onClick={() => setMenuOpen(true)}
//               className="btn btn-ghost btn-circle avatar"
//             >
             

//               <div className='hidden md:block'>
//                 {/* Avatar */}
//                 <img
//                   className="rounded-full w-10 h-10 object-cover"
//                   referrerPolicy="no-referrer"
//                   src={user?.photoURL || "https://i.ibb.co/2NfF0zF/default-avatar.png"}
//                   alt="profile"
//                 />
//               </div>
//             </button>
//           )}
//         </div>
//       </div>

//       {/* Sidebar Overlay */}
//       { setMenuOpen && (
//         <div className="fixed inset-0 z-40 flex">
//           {/* Overlay */}
//           <div
//             className="fixed inset-0 bg-black opacity-50"
//             onClick={() => setMenuOpen(false)}
//           ></div>

//           {/* Sidebar */}
     
//             {menuOpen && (
//               <ul className="absolute right-0 mt-2 w-40 bg-base-100 shadow-lg rounded-lg menu p-2 z-50">
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
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link, NavLink } from "react-router";
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
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/meals">Meals</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact US</NavLink>
      </li>
       <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black text-white shadow-sm px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl flex items-center gap-2" to="/">
          <Logo />
        
        </Link>
      </div>

      {/* Navbar Center */}
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
                src={user?.photoURL || "https://i.ibb.co/2NfF0zF/default-avatar.png"}
                alt="profile"
              />
            </button>

            {menuOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-base-100 shadow-lg rounded-lg menu p-2 z-50">
                <li>
                  <Link onClick={() => setMenuOpen(false)} to="/profile">
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

