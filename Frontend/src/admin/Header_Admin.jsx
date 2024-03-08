import React, { useState, useEffect } from 'react';

const Header_Admin = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
  };

  return (
    <>
      <header className="bg-blue-800 left-0 top-0 right-0 z-0 flex items-center">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="/#" className="block w-full py-5 ml-20">
                <img
                  src="../../../public/Logo.png"
                  alt="logo"
                  className="w-full"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  id="navbarToggler"
                  className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${open && "navbarTogglerActive"}`}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none ${!open && "hidden"}`}
                >
                  <ul className="block lg:flex text-white">
                    <ListItem NavLink="/dashboard">Home</ListItem>
                    {isLoggedIn && (
                      <>
                        <ListItem NavLink="/manage_car">Manage car</ListItem>
                        <ListItem NavLink="/all_request">Manage Request</ListItem>
                      </>
                    )}
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                {isLoggedIn ? (
                  <button
                    onClick={handleSignOut}
                    className="px-7 py-3 text-base font-medium text-dark hover:text-primary"
                  >
                    Sign out
                  </button>
                ) : (
                  <>
                    <a
                      href="/login"
                      className="px-7 py-3 text-base font-medium text-dark hover:text-primary"
                    >
                      Sign in
                    </a>
                    <a
                      href="/register"
                      className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
                    >
                      Sign Up
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const ListItem = ({ children, NavLink }) => {
  return (
    <li>
      <a
        href={NavLink}
        className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-10 lg:inline-flex"
      >
        {children}
      </a>
    </li>
  );
}

export default Header_Admin;




// import React, { useState, useEffect } from 'react';

// const Header_Admin = () => {
//   const [open, setOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const userId = localStorage.getItem('userId');
//     if (userId) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   const handleSignOut = () => {
//     localStorage.removeItem('userId');
//     setIsLoggedIn(false);
//   };

//   return (
//     <>
//       <header className="bg-blue-800 left-0 top-0 right-0 z-0 flex items-center">
//         <div className="container">
//           <div className="relative -mx-4 flex items-center justify-between">
//             <div className="w-60 max-w-full px-4">
//               <a href="/#" className="block w-full py-5 ml-20">
//                 <img
//                   src="../../../public/Logo.png"
//                   alt="logo"
//                   className="w-full"
//                 />
//               </a>
//             </div>
//             <div className="flex w-full items-center justify-between px-4">
//               <div>
//                 <button
//                   onClick={() => setOpen(!open)}
//                   id="navbarToggler"
//                   className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${open && "navbarTogglerActive"}`}
//                 >
//                   <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
//                   <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
//                   <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
//                 </button>
//                 <nav
//                   id="navbarCollapse"
//                   className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none ${!open && "hidden"}`}
//                 >
//                   <ul className="block lg:flex text-white">
//                     <ListItem NavLink="/dashboard">Home</ListItem>
//                     <ListItem NavLink="/manage_car">Manage car</ListItem>
//                     <ListItem NavLink="/all_request">Manage Request</ListItem>
//                   </ul>
//                 </nav>
//               </div>
//               <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
//                 {isLoggedIn ? (
//                   <button
//                     onClick={handleSignOut}
//                     className="px-7 py-3 text-base font-medium text-dark hover:text-primary"
//                   >
//                     Sign out
//                   </button>
//                 ) : (
//                   <>
//                     <a
//                       href="/login"
//                       className="px-7 py-3 text-base font-medium text-dark hover:text-primary"
//                     >
//                       Sign in
//                     </a>
//                     <a
//                       href="/register"
//                       className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
//                     >
//                       Sign Up
//                     </a>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// const ListItem = ({ children, NavLink }) => {
//   return (
//     <li>
//       <a
//         href={NavLink}
//         className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-10 lg:inline-flex"
//       >
//         {children}
//       </a>
//     </li>
//   );
// }

// export default Header_Admin;




// import React, { useState } from 'react';

// const Header_Admin = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <header className="bg-blue-800 left-0 top-0 right-0 z-0 flex items-center ">
//         <div className="container">
//           <div className="relative -mx-4 flex items-center justify-between">
//             <div className="w-60 max-w-full px-4">
//               <a href="/#" className="block w-full py-5 ml-20">
//                 <img
//                   src="../../../public/Logo.png"
//                   alt="logo"
//                   className="w-full"
//                 />
//               </a>
//             </div>
//             <div className="flex w-full items-center justify-between px-4">
//               <div>
//                 <button
//                   onClick={() => setOpen(!open)}
//                   id="navbarToggler"
//                   className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${open && "navbarTogglerActive"}`}
//                 >
//                   <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
//                   <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
//                   <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
//                 </button>
//                 <nav
//                   id="navbarCollapse"
//                   className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none ${!open && "hidden"}`}
//                 >
//                   <ul className="block lg:flex text-white">
//                     <ListItem NavLink="/dashboard">Home</ListItem>
//                     <ListItem NavLink="/manage_car">Manage car</ListItem>
//                     <ListItem NavLink="/all_request">Manage Request</ListItem>
//                   </ul>
//                 </nav>
//               </div>
//               <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
//                 <a
//                   href="/login"
//                   className="px-7 py-3 text-base font-medium text-dark hover:text-primary"
//                 >
//                   Sign in
//                 </a>

//                 <a
//                   href="/register"
//                   className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
//                 >
//                   Sign Up
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// const ListItem = ({ children, NavLink }) => {
//   return (
//     <li>
//       <a
//         href={NavLink}
//         className="flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-10 lg:inline-flex"
//       >
//         {children}
//       </a>
//     </li>
//   );
// }

// export default Header_Admin;