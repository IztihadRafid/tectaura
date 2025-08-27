import { useState } from "react";
import { assets } from "../../assets/icons/assets";
import "./LoginPopup.css"

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Sign Up")
    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2 className="text-2xl font-bold ">{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {
                        currState === "Login" ? <></> : <input type="text" placeholder="Your Name" required />
                    }

                    <input type="email" placeholder="Your Email" required />
                    <input type="password" placeholder="Password" required />
                </div>
                <button className="btn bg-black text-white hover:bg-slate-700 rounded-lg">{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition flex items-center gap-2">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the term and policy</p>
                </div>
                {
                    currState === "Login" ? <p>Create a new account? <span  className="text-black font-bold cursor-pointer" onClick={()=>setCurrState("Sign Up")}>Click here</span> </p> : <p>Already have an account? <span className="text-black font-bold cursor-pointer"  onClick={()=>setCurrState("Login")}>Login here</span></p>
                }


            </form>
        </div>
    );
};

export default LoginPopup;