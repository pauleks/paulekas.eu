/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const Laikas: NextPage = () => {
  const [time, setTime] = useState(0);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match(/^[0-9]*$/)) return setTime(0);
    setTime(Number(e.target.value));
  };

  return (
    <>
      <p>
        Jeigu normaliam žmogui tereiktų <input onChange={handleInput} /> minučių
        atlikti kokį darbą, Pauliui tai užtruktų{" "}
        <span>{time * 1.75 || "---"}</span> minučių
      </p>
      <img
        src="/images/peepoCry.png"
        width={128}
        height={128}
        alt="Crying Peepo emoji"
        id="peepo"
      />

      <style jsx>{`
        input {
          border: 1px solid white;
          border-radius: 4px;
          padding: 0.2em 0.6em;
          margin-top: 10px;
          background: transparent;
          transition: background-color 0.5s;
          color: white;
          text-align: center;
          width: 50px;
          height: 40px;
          font-size: xx-large;
        }
        span {
          font-weight: 900;
          text-decoration: underline wavy white;
        }
        p {
          text-align: center;
          margin: 16px;
          font-size: xx-large;
        }
        #peepo {
          margin-left: calc(50% - 65px);
        }
      `}</style>
    </>
  );
};

export default Laikas;
