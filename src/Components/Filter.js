import React from "react";
import { Pane, Heading, Combobox, Text , SearchInput } from "evergreen-ui";

function Filter() {
  return( 
  <Pane
    marginBottom = {10} 
  >
    <Heading marginBottom = {20}>Filter profiles by selecting options below</Heading>
    <Pane
      display = "flex"
      elevation={1}
      border = "default"
      margin = {5}
    >
    
      <Combobox
        openOnFocus
        float = "left"
        margin = {15}
        width={300}
        items={['Male', 'Female']}
        onChange={selected => console.log(selected)}
        placeholder="Gender"
      />

      <Combobox
        openOnFocus
        float = "left"
        margin = {15}
        width={300}
        items={['Male', 'Female']}
        onChange={selected => console.log(selected)}
        placeholder="Gender"
      />

      <Combobox
        openOnFocus
        float = "left"
        margin = {15}
        width={300}
        items={['Male', 'Female']}
        onChange={selected => console.log(selected)}
        placeholder="Gender"
      />

      <SearchInput 
        placeholder="Search by Patient"
        float = "left"
        margin = {15}
      />
    </Pane>
  </Pane>
  );
}

export default Filter;
