import name from "../../assets/name.png";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../page/Authentication/AuthProvider/AuthProvider";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import Swal from "sweetalert2";
const Navber = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [mode, setMode] = useState("light");
  const html = document.documentElement;

  const changeHeldelThime = () => {
    if (mode === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      console.log(mode);
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };
  useEffect(() => {
    const crrentMode = localStorage.getItem("mode") || "light";
    setMode(crrentMode);
    html.classList.add(crrentMode);
  }, []);
  const nav = (
    <>
      <NavLink to="/" className="mb-1 lg:mb-0">
        Home
      </NavLink>
      <NavLink to="/addjobs" className="mb-1 lg:mb-0">
        Add job
      </NavLink>
      {user ? (
        <>
          <NavLink to="myPostedJobs" className="mb-1 lg:mb-0">
            My posted jobs
          </NavLink>
        </>
      ) : (
        ""
      )}
      <NavLink to="/myBids" className="mb-1 lg:mb-0">
        My Bids
      </NavLink>
      <NavLink to="/bidRequest" className="mb-1 lg:mb-0">
        Bid Requests
      </NavLink>
    </>
  );
  const hendelLogOut = () => {
    console.log(logOutUser, "logOut");
    logOutUser()
      .then((result) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Successfull in the registor",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="bg-[#0B1221] sticky top-0 left-0 w-full py-2 z-40">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="flex justify-between items-center w-10/12 md:w-full lg:w-fit">
          <div className="drawer drawer-start lg:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer-4" className="text-white text-3xl">
                <FiMenu />
              </label>
            </div>
            <div className="drawer-side  mt-[12%] md:mt-[8.8%] z-50">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-[80%] md:w-[50%] text-white bg-gradient-to-l from-[#142F5C] to-[#0B1221] min-h-full text-xl ">
                {nav}
                <div className="border border-white my-2"></div>
                {user ? (
                  <>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2 h-fit w-full">
                        <div className="flex items-center gap-2 md:gap-5">
                          <div className="w-[55px] h-[55px] bg-[#142F5C] p-1 bg- border border-white rounded-[50%]">
                            <img
                              src={user.photoURL}
                              alt=""
                              className="w-full h-full rounded-[50%]"
                            />
                          </div>
                          <h1 className="text-white text-xl">
                            {user.displayName}
                          </h1>
                        </div>
                        <div>
                          <div
                            onChange={changeHeldelThime}
                            className="form-control"
                          >
                            <label className="label cursor-pointer">
                              <span className="label-text"></span>
                              <input type="checkbox" className="toggle" />
                            </label>
                          </div>
                        </div>
                      </div>
                      <p className="text-white text-sm">{user.email}</p>
                    </div>
                    <NavLink onClick={hendelLogOut} className="mb-1 lg:mb-0">
                      log Out
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink to="/sinup" className="mb-1 lg:mb-0">
                      Register
                    </NavLink>
                    <NavLink to="/login" className="mb-1 lg:mb-0 ">
                      login
                    </NavLink>
                    <div
                            onChange={changeHeldelThime}
                            className="form-control"
                          >
                            <label className="label cursor-pointer">
                              <span className="label-text"></span>
                              <input type="checkbox" className="toggle" />
                            </label>
                          </div>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="flex items-center md:flex-row-reverse">
            <img src={name} alt="" className="w-[110px] md:w-[150px]" />
            <img src={logo} alt="" className="w-[50px] md:w-[80px]" />
          </div>
        </div>
        <div className="hidden lg:flex gap-5">
          <ul className="flex items-center gap-5 text-xl text-white px-1">
            {nav}
          </ul>
          <div>
            {user ? (
              <Menu>
                <MenuButton>
                  <div className="w-[50px] h-[50px] bg-[#142F5C] p-1 bg- border border-white rounded-[50%]">
                    <img
                      src={user.photoURL}
                      alt=""
                      className="w-full h-full rounded-[50%]"
                    />
                  </div>
                </MenuButton>
                <MenuList>
                  <div className="bg-[#142F5C] z-10 text-white p-5 text-xl mt-1 rounded b-lg text-right">
                    <MenuItem>{user.displayName}</MenuItem>
                    <MenuItem>{user.email}</MenuItem>
                    <MenuDivider className="my-2" />
                    <MenuItem className="py-1 px-3 bg-black w-full flex justify-between rounded-xl dark:bg-white dark:text-black">
                      <div
                        onClick={hendelLogOut}
                        className=" uppercase font-medium text-center rounded-lg "
                      >
                        log Out
                      </div>

                      <div
                        onChange={changeHeldelThime}
                        className="form-control"
                      >
                        <label className="label cursor-pointer">
                          <span className="label-text"></span>
                          <input type="checkbox" className="toggle" />
                        </label>
                      </div>
                    </MenuItem>
                  </div>
                </MenuList>
              </Menu>
            ) : (
              <div className="flex gap-5">
                <NavLink
                  to="/sinup"
                  className="mb-1 lg:mb-0 bg-[#142F5C] px-4 text-2xl py-1 rounded-lg text-white"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="mb-1 lg:mb-0 bg-[#142F5C] px-4 text-2xl py-1 rounded-lg text-white"
                >
                  login
                </NavLink>
                <div
                  onChange={changeHeldelThime}
                  className="text-white rounded-[50%]"
                >
                  <label className="swap swap-rotate">
                    <input type="checkbox" />
                    <svg
                      className="swap-on fill-current w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    <svg
                      className="swap-off fill-current w-10 h-10"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
