import React from "react";
import Giphy from "../giphy/giphy";

const Suggestions = props => {
  console.log(props + "aa");

  const options = props.filteredData.map(r => <li key={r.id}>{r.title}</li>);
  return <ul>{options}</ul>;
};

export default Suggestions;
