import React, { useState } from 'react';
import "./index.css";

export default function MaterialInput() {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    console.log(1)
    setFocus(true)
  }

  const onBlur = () => {
    console.log(2)
    setFocus(false)
  }

  const onChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value)
  }

  return (
    <div className={`m__container ${focus ? "m__focused" : ""}`}>
      <input
        id="material-input-(random-value)"
        {...{
          value, onChange, onFocus, onBlur
        }}
      />
      <div className={`m__title ${(value || focus) ? "m__move" : ""}`}>Input Title</div>
    </div>
  )
}
