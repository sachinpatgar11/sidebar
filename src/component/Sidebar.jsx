import { GiDiceFire } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdDashboardCustomize, MdPlaylistAddCheck } from "react-icons/md";
import { LiaChartBarSolid } from "react-icons/lia";
import { BiNews, BiSupport } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { useLocation } from "react-router-dom";

const Sidebar = ({ sideNav, setSideNav }) => {
  const location = useLocation();
  return (
    <div
      className={`${
        sideNav ? "w-24 md:w-64" : "w-24 "
      } flex  flex-col shadow-md h-[100vh] absolute top-0 left-0 px-4`}
    >
      <div className="flex px-4 py-4 items-center gap-2">
        <GiDiceFire className="h-8 w-8 text-green-800" />
        {sideNav && (
          <h2 className="text-2xl font-bold text-green-800 hidden md:block">
            EverHeld
          </h2>
        )}
      </div>
      <div className="relative flex py-4 hidden md:block">
        <hr className="text-green-500 w-full border-t" />
        {sideNav ? (
          <IoIosCloseCircleOutline
            className="text-green-800 h-6 w-6 absolute right-[-10px] top-[3px] cursor-pointer"
            onClick={() => setSideNav((sideNav) => !sideNav)}
          />
        ) : (
          <CiCirclePlus
            className="text-green-800 h-6 w-6 absolute right-[-10px] top-[3px] cursor-pointer"
            onClick={() => setSideNav((sideNav) => !sideNav)}
          />
        )}
      </div>
      <div className="flex items-center text-gray-800 space-x-4 p-4">
        <div>
          <BsPersonCircle className="h-8 w-8 text-emerald-800" />
        </div>
        {sideNav && (
          <div className="hidden md:block">
            <p className="text-emerald-800 text-sm mb-0">Hello User</p>
            <p className="text-emerald-800 text-sm">youremail@gmail.com</p>
          </div>
        )}
      </div>
      <div>
        <ul className="flex flex-col space-y-6 mt-6 text-emerald-800 font-bold">
          <li
            className={`${
              location.pathname == "/" ? "bg-lime-200 rounded py-2" : ""
            } flex items-center space-x-4 px-4 hover:bg-gray-200`}
          >
            <a href="/">
              <MdDashboardCustomize className="h-6 w-6" />
            </a>
            {sideNav && (
              <a href="/" className="hidden md:block">
                Dashboard
              </a>
            )}
          </li>
          <li
            className={`${
              location.pathname == "/transaction"
                ? "bg-lime-200 rounded py-2"
                : ""
            } flex items-center space-x-4 px-4 hover:bg-gray-200`}
          >
            <a href="/transaction">
              <MdPlaylistAddCheck className="h-6 w-6" />
            </a>
            {sideNav && (
              <a href="/transaction" className="hidden md:block">
                Transaction
              </a>
            )}
          </li>
          <li
            className={`${
              location.pathname == "/performance"
                ? "bg-lime-200 rounded py-2"
                : ""
            } flex items-center space-x-4 px-4 hover:bg-gray-200`}
          >
            <a href="/performance">
              <LiaChartBarSolid className="h-6 w-6" />
            </a>
            {sideNav && (
              <a href="/performance" className="hidden md:block">
                Performance
              </a>
            )}
          </li>
          <li
            className={`${
              location.pathname == "/news" ? "bg-lime-200 rounded py-2" : ""
            } flex items-center space-x-4 px-4 hover:bg-gray-200`}
          >
            <a href="/news">
              <BiNews className="h-6 w-6" />
            </a>
            {sideNav && (
              <a href="/news" className="hidden md:block">
                News
              </a>
            )}
          </li>
          <li
            className={`${
              location.pathname == "/settings" ? "bg-lime-200 rounded py-2" : ""
            } flex items-center space-x-4 px-4 hover:bg-gray-200`}
          >
            <a href="/settings">
              <FiSettings className="h-6 w-6" />
            </a>
            {sideNav && (
              <a href="/settings" className="hidden md:block">
                Settings
              </a>
            )}
          </li>
          <li
            className={`${
              location.pathname == "/support" ? "bg-lime-200 rounded py-2" : ""
            } flex items-center space-x-4 px-4 hover:bg-gray-200`}
          >
            <a href="/support">
              <BiSupport className="h-6 w-6" />
            </a>
            {sideNav && (
              <a href="/support" className="hidden md:block">
                Support
              </a>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
