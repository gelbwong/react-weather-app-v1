import React from "react";
import Typewriter from "typewriter-effect/dist/core";

export default function LoadingText() {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["Hello", "World"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
