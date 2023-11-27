import React, { useState, useEffect } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import IndexStyles from "./index.module.scss";
import logo from "../../assets/Logo.png";
import Category from "../../assets/Category1.svg";
import star from "../../assets/Star.svg";
import user from "../../assets/User.svg";
// import { logout } from '../features/auth';

export default function Index() {
  const [navValue, setNavValue] = useState("");
  useEffect(() => {
    const tabs = () => {
      setNavValue(window.location.pathname);
    };
    tabs();
  });

  const tabs = () => {
    setNavValue(window.location.pathname);
  };
  return (
    <React.Fragment>
      <div className={IndexStyles.holdAll}>
        <div className={IndexStyles.NavBar}>
          <div
            className={IndexStyles.NavBar2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                height: "5em",
                marginBottom: "2em",
              }}
            />
          </div>
          <ul
            style={{
              paddingLeft: 0,
            }}
          >
            <li className={IndexStyles.list} onClick={tabs}>
              <Link
                to="all-songs"
                className={
                  navValue === "/admin/all-songs"
                    ? IndexStyles.active
                    : IndexStyles.listLink
                }
              >
                <img
                  src={Category}
                  alt="logo"
                  className={IndexStyles.iconSvg}
                />
                All Songs
              </Link>
            </li>
            <li className={IndexStyles.list} onClick={tabs}>
              <Link
                to="upload-music"
                className={
                  navValue === "/admin/upload-music"
                    ? IndexStyles.active
                    : IndexStyles.listLink
                }
              >
                <img src={star} alt="logo" className={IndexStyles.iconSvg} />
                Upload Song
              </Link>
            </li>

            <li className={IndexStyles.list} onClick={tabs}>
              <Link
                to="djmix"
                className={
                  navValue === "/admin/djmix"
                    ? IndexStyles.active
                    : IndexStyles.listLink
                }
              >
                <img src={star} alt="logo" className={IndexStyles.iconSvg} />
                Dj Mix
              </Link>
            </li>

            <li className={IndexStyles.list} onClick={tabs}>
              <Link
                to="latestMusic"
                className={
                  navValue === "/admin/latestMusic"
                    ? IndexStyles.active
                    : IndexStyles.listLink
                }
              >
                <img src={star} alt="logo" className={IndexStyles.iconSvg} />
                Latest Music
              </Link>
            </li>

            <li className={IndexStyles.list} onClick={tabs}>
              <Link
                to="news"
                className={
                  navValue === "/admin/news"
                    ? IndexStyles.active
                    : IndexStyles.listLink
                }
              >
                <img src={star} alt="logo" className={IndexStyles.iconSvg} />
                Latest News
              </Link>
            </li>
            {/* <li className={IndexStyles.list} onClick={tabs}>
              <Link
                to="contact"
                className={
                  navValue === "/admin/contact"
                    ? IndexStyles.active
                    : IndexStyles.listLink
                }
              >
                <img src={user} alt="logo" className={IndexStyles.iconSvg} />
                Inspection Booking
              </Link>
            </li>
            <li className={IndexStyles.list} onClick={tabs}>
              <Link
                to="reservationhub"
                className={
                  navValue === "/admin/reservationhub"
                    ? IndexStyles.active
                    : IndexStyles.listLink
                }
              >
                <img src={user} alt="logo" className={IndexStyles.iconSvg} />
                Reservation Hub
              </Link>
            </li>
            <li className={IndexStyles.list} onClick={tabs}>
              <Link
                to="contacthub"
                className={
                  navValue === "/admin/contacthub"
                    ? IndexStyles.active
                    : IndexStyles.listLink
                }
              >
                <img src={user} alt="logo" className={IndexStyles.iconSvg} />
                Contact Hub
              </Link>
            </li> */}
            <li
              className={IndexStyles.list}
              onClick={() => {
                // sessionStorage.setItem("Logged", false)
                // dispatch(logout())
                tabs();
              }}
            >
              <Link
                to="/"
                className={
                  navValue === "/" ? IndexStyles.active : IndexStyles.listLink
                }
              >
                <AiOutlineLogout className={IndexStyles.iconSvg} />
                Log out
              </Link>
            </li>
          </ul>
        </div>

        <div className={IndexStyles.holdHeader}>
          <div className={IndexStyles.holdFlex}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <input
                type="search"
                placeholder="search"
                style={{
                  outline: "none",
                  border: "none",
                  backgroundColor: "white",
                }}
              />
              <BiSearch />
            </div>
            <div className={IndexStyles.headerSec}>
              <div className={IndexStyles.headerNoti}>
                <img src={user} alt="bell" />
                <div className={IndexStyles.headerNotiBall}></div>
              </div>
              <div>
                <span>Diamond Kekule</span>
              </div>
            </div>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
