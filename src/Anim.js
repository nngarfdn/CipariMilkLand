import React, { useState, useEffect } from "react";
import animationData from "./lotties/down.json";
import Lottie from "react-lottie";

import { useHistory } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const words = ["CIPARI MILKY LAND"];

export default function Anim() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  const history = useHistory();
  function toAnggur() {
    history.push("#tentang");
  }
  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  

  return (
    <div>
      <h1 className="text-color-green font-norican mt-5 pt-5">
        {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
      </h1>

      <h5 className="text-font center my-4 mx-5">Pusat Produksi Susu Terbaik Untuk Kamu yang Prioritas</h5>

      <button className="btn-green-dash">BELI SEKARANG</button>
     
    </div>
  );
}
