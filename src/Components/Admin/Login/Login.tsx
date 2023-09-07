/* eslint-disable prefer-template */
/* eslint-disable max-len */
/* eslint-disable indent */
import React, { useState } from "react";
import style from "./Login.module.scss";

import Logo from "../../../assets/Logo.png";

export default function Login() {
  //   const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // if (email === "olatoyinbotoheeb@gmail.com" && password === "Olatoyinbo1") {
    //     navigate("/admin/reservation")
    //     dispatch(login())
    //     setSuccess(true);
    // } else if (email === "default@gmail.com" && password === "default") {
    //     navigate("/admin/reservation")
    //     setSuccess(true);
    //     dispatch(login())
    // } else {
    //     alert("Wrong password")
    // }
  };
  return (
    <section className={style.holdAll}>
      <div className={style.holdFormNText}>
        <div className={style.holdText}>
          <div className={style.holdImage}>
            <img src={Logo} alt="Logo" />
          </div>
          <div>
            <h3>OfficIal Dj Mee Music</h3>
            <p>
              Get ready to dance all night long with beats that will ignite your
              soul.
            </p>
          </div>
        </div>
        <div className={style.holdForm}>
          <div className={style.holdImage}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className={style.headerText}>
            <h3>Welcome Back!</h3>
            <p>
              Please sign in to your personal account to start access all
              services.
            </p>
          </div>
          <form onSubmit={handleLogin}>
            <p className={style.inSwi}>Login with email and password</p>
            <div className={style.mb}>
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={style.mb}>
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
      {/* {isLoading ? <Loader /> : null} */}
    </section>
  );
}
