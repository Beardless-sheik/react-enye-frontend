import React from "react";
import { Pane, Heading, Combobox } from "evergreen-ui";

function Filter() {
  return( 
  <Pane
    margin = {50}
  >
    <Heading>Filter profiles by selecting options below</Heading>
    <Pane>
      <Combobox
        openOnFocus
        margin = {30}
        width={300}
        items={['Male', 'Female']}
        onChange={selected => console.log(selected)}
        placeholder="Gender"
/>
    </Pane>
  </Pane>
  );
}

export default Filter;
