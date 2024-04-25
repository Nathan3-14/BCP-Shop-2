'use client';

import React, { useRef, useEffect, ReactNode } from "react";
import { Gradient } from "@/app/lib/StripeGradient";

const Canvas = (props) => {
  const canvasRef2 = useRef(null);
  const gradient = new Gradient();

  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  var colors = props.colors.split(' ')
  console.log(colors)
  console.log(colors[0])

  return (
    <>
      <canvas
        className=''
        id="gradient-canvas"
        ref={canvasRef2}
        {...props}
        data-transition-in
      >
        {props.children}
      </canvas>

      <style>{`
        #gradient-canvas {
          --gradient-color-1: ${ colors[0] ? colors[0] : '#000' };
          --gradient-color-2: ${ colors[1] ? colors[1] : '#000' };
          --gradient-color-3: ${ colors[2] ? colors[2] : '#000' };
          --gradient-color-4: ${ colors[3] ? colors[3] : '#000' };

          height: 100dvh;
          width: 100%;
        
          position: absolute;
          z-index: -10;
        }
      `}</style>
    </>
  );
};

export default Canvas;
