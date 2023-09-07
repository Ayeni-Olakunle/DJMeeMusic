import React, { useState, useEffect } from "react";
import Layout1Style from "./Layout1.module.scss";

function Layout1() {
  return (
    <div className={Layout1Style.holdAll}>
      <div className={Layout1Style.holdAll2}>
        <h4 className={Layout1Style.textHead}>All Songs</h4>
        <div className={Layout1Style.holdDateSearch}>
          <div>
            <input
              type="search"
              placeholder="Search by email..."
              className={Layout1Style.search}
            />
          </div>
        </div>
        <div>
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Date</td>
                <td>Verification</td>
                <td></td>
              </tr>
            </thead>
            <tbody className={Layout1Style.holdTable}>
              <tr>
                <td>Diamond Kekule</td>
                <td>Diamond Kekule@gmail.com</td>
                <td>Phone Number</td>
                <td>Date</td>
                <td className={Layout1Style.pend}>Verified</td>
                <td>
                  <button className="blackNwhite">View Profile</button>
                  <button
                    style={{ marginLeft: "10px" }}
                    className="blackNwhite"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Layout1;
