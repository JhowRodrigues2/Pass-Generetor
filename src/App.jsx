import { useState } from "react";
import "./App.css";
import { FaUserLock } from "react-icons/fa";
import * as React from "react";
import Checkbox from "./Components/Checkbox";
import { useEffect } from "react";

function App() {
  const [range, setRange] = useState(8);
  const [radomPass, setRadomPass] = useState([]);

  const getLetterLowerCase = () => {
    // pegando o key code de cada tecla (TABELA ASCII) - MINÚSCULO
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };

  const getLetterUpperCase = () => {
    // pegando o key code de cada tecla (TABELA ASCII) - MAIÚSCULO
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };
  const getNumber = () => {
    //gera o número aleatório até 9
    return Math.floor(Math.random() * 10).toString();
  };

  const getSymbol = () => {
    //gera um símbolo aleatório
    const symbols = "(){}[]=<>;?,.!@#$%*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const generatePass = (
    getSymbol,
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber
  ) => {
    const generators = [
      getLetterLowerCase,
      getLetterUpperCase,
      getNumber,
      getSymbol,
    ];

    let i;
    for (i = 0; i < range; i = i + 4) {
      generators.forEach(() => {
        console.log(generators[Math.floor(Math.random * generators.length)]);
      });
    }
  };

  return (
    <div className="min-w-full h-screen flex justify-center items-center p-6 bg-[url('./assets/bg.jpg')]">
      <div className="bg-white rounded-3xl w-[650px] h-[80vh] p-5 flex flex-col gap-2">
        <div className=" h-[30vh]">
          <div className=" w-full h-[15vh] flex justify-center items-end">
            <FaUserLock className=" text-[#66c8cb] text-6xl" />
          </div>
          <div className=" h-[15vh] flex items-center flex-col">
            <div className=" w-24 border-2 border-black rounded flex justify-around">
              <p className="font-bold text-xl text-[#66c8cb] ">x</p>
              <p className="font-bold text-xl ">x</p>
              <p className="font-bold text-xl text-[#66c8cb]">x</p>
              <p className="font-bold text-xl ">x</p>
            </div>
            <div className="flex flex-col justify-center items-center mt-6">
              <h1 className="font-bold"> PASSWORD GENERATOR</h1>
              <p>
                Create strong and secure passwords to keep your account safe
                online.
              </p>
            </div>
          </div>
        </div>

        <main className="h-[45vh] p-9">
          <div className="h-[4vh] flex justify-around ">
            <input
              type="text"
              className="w-1/2 rounded-xl border-2 border-black text-center"
              value={radomPass}
            />
            <button
              className="bg-[#69cacd] w-28 rounded-xl text-white"
              onClick={generatePass}
            >
              Start
            </button>
            <button className="bg-[#69cacd] w-28 rounded-xl text-white">
              Copy
            </button>
          </div>
          <div>
            <p className="font-semibold text-green-600 ml-3">
              {range > 8 ? "Strong" : "Easy"}
            </p>
          </div>
          <div className="flex flex-col h-[35vh] justify-around">
            <div className="flex gap-2 items-center">
              <label htmlFor="pass" className="font-semibold">
                Password Count:
              </label>
              <input
                type="text"
                id="pass"
                className="rounded-xl w-16  border border-black text-center font-sans"
                value={range}
              />
            </div>
            <input
              type="range"
              name=""
              id=""
              value={range}
              min={2}
              max={20}
              onChange={(e) => setRange(e.target.value)}
            />
            <Checkbox text={"Upercase"} htmlFor={"Upercase"} />
            <Checkbox text={"Lowercase"} htmlFor={"Lowercase"} />
            <Checkbox text={"Special Characters"} htmlFor={"Special"} />
            <Checkbox text={"Numbers"} htmlFor={"Numbers  "} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
