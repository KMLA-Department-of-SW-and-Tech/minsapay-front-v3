import React, { useEffect, useState } from "react";

import { useLoginStore } from "../store/useLoginStore";
import { useAuthStore } from "../store/useAuthStore";

import { textInput } from "../styles/mobileTextInput";

const state = useLoginStore.getState();

const TextInput = (props: any) => {
  return (
    <div>
      <input
        style={textInput}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
};

export default TextInput;
