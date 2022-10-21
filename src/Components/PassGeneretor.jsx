import React from "react";
import "/src/App.css";
import { FaUserLock } from "react-icons/fa";
import { useState } from "react";
import Img from "../assets/feature.svg";
const PassGeneretor = () => {
  const [range, setRange] = useState(4);
  const [radomPass, setRadomPass] = useState(null);
  const symbols = "(){}[]=<>;?,.!@#$%*+-";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0";
  const number = "0123456789";
  let charset = lower + upper + symbols + number;

  const generatePass = () => {
    let pass = "";
    for (let i = 0, n = charset.length; i < range; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }

    setRadomPass(pass);
  };

  return (
    <div className="min-w-full h-screen flex justify-center items-center p-6  bg-[url('./assets/bg.jpg')]">
      <div className="bg-white rounded-3xl w-[650px] md:h-[80vh] p-4 flex flex-col gap-2">
        <div className=" ">
          <div className=" w-full flex justify-center items-end">
            <FaUserLock className=" text-[#66c8cb] text-6xl" />
          </div>
          <div className="  flex items-center flex-col">
            <div className=" w-24 border-2 border-black rounded flex justify-around">
              <p className="font-bold text-xl text-[#66c8cb] ">x</p>
              <p className="font-bold text-xl ">x</p>
              <p className="font-bold text-xl text-[#66c8cb]">x</p>
              <p className="font-bold text-xl ">x</p>
            </div>
            <div className="flex flex-col justify-center items-center mt-6">
              <h1 className="font-bold"> PASSWORD GENERATOR</h1>
              <p className="mt-4">
                Create strong and secure passwords to keep your account safe
                online.
              </p>
            </div>
          </div>
        </div>

        <main className="mt-8">
          <div className="flex md:flex-nowrap flex-wrap gap-4">
            <input
              type="text"
              className="w-full rounded-xl border-2 border-black text-center"
              value={radomPass}
            />
            <div className="md:w-1/2 w-full gap-2 flex justify-around">
              <div className="w-1/2">
                <button
                  className="bg-[#69cacd] h-10 w-28 rounded-xl text-white"
                  onClick={generatePass}
                >
                  Generate
                </button>
              </div>
              <div className="">
                <button
                  className={
                    radomPass == null
                      ? "bg-[#b5eef0] w-28 rounded-xl h-10 text-white"
                      : "bg-[#69cacd] w-28 rounded-xl h-10 text-white"
                  }
                  disabled={radomPass == null ? true : false}
                  onClick={() => {
                    navigator.clipboard.writeText(radomPass);
                    window.alert("Copied Pass");
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>

          <div>
            <p
              className={
                range > 7
                  ? "font-semibold text-green-600 mt-2 ml-3"
                  : "font-semibold text-red-600 mt-2 ml-3"
              }
            >
              {range > 7 ? "Strong" : "Easy"}
            </p>
          </div>
          <div className="flex flex-col  justify-around mt-4">
            <div className="flex gap-2 items-center mt-4">
              <label htmlFor="pass" className="font-semibold">
                Password Count:
              </label>
              <input
                type="text"
                id="pass"
                className="rounded-xl w-16 border border-black text-center font-sans"
                value={range}
              />
            </div>
            <input
              className="mt-4"
              type="range"
              name=""
              id=""
              value={range}
              min={2}
              max={20}
              onChange={(e) => setRange(e.target.value)}
            />
            <div className="flex justify-center mt-10">
              <img src={Img} className="w-1/2"></img>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PassGeneretor;
