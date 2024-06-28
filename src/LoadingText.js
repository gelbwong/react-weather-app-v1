import React from "react";
import Typewriter from "typewriter-effect";

import "./LoadingText.css";

export default function LoadingText() {
  return (
    <div className="loading-text">
      <Typewriter
        options={{
          strings: ["Please be patient while site loads ❤️"],
          delay: 25,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
