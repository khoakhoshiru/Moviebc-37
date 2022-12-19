import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const profile = useSelector(state => state?.loginReducer?.profile);
  console.log(profile);
  return (
    <header className="bg-slate-50 h-20">
      <div className="container h-full mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl text-white">
          <img
            width={200}
            src="https://demo1.cybersoft.edu.vn/logo.png"
            alt=""
          />
        </Link>
        {profile ? (
          <span className="text-black">xin chao {profile?.hoTen}</span>
        ) : (
          <nav>
            <NavLink
              to="/login"
              className={({ isActive }) => {
                if (isActive) return "text-yellow-200 text-lg";
                return "text-black text-lg no-underline";
              }}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 align-middle"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </span>{" "}
              Đăng nhập
            </NavLink>
            <span className="text-black text-xl"> | </span>
            <NavLink
              to="/signup"
              className={({ isActive }) => {
                if (isActive) return "text-yellow-200 text-lg";
                return "text-black text-lg no-underline";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 align-middle"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Đăng ký
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
