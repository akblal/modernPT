import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from "react-icons/bs";

const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);

  const Icon = (
    visible ?
      <BsEye className= 'password-visible' onClick= {() => setVisible(!visible)}/> :
      <BsEyeSlash className= 'password-visible' onClick= {() => setVisible(!visible)}/>
  )

  const InputType = visible ? 'text' : 'password'

  return [InputType, Icon]
}

export default usePasswordToggle