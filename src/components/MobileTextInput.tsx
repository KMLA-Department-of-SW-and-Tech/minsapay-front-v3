import React from "react";

import { textInput } from "../styles/mobileTextInput";

const TextInput = (props: any) => {
  return (
    <div>
      <input style={textInput} placeholder={props.placeholder} type={props.type}/>
    </div>
  );
};

export default TextInput;