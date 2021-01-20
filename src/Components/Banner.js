import React from "react";
import { Pane, Heading } from "evergreen-ui";

function Banner() {
  return (
    <Pane 
      background="overlay" 
      height={100}
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginBottom = {50}
    >
      <Heading size = {700}> PROFILE FINDER </Heading>
    </Pane>
  );
}

export default Banner;
