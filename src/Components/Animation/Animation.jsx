import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const Animation = () => {
  return (
    <TypeAnimation className="text-white"
      sequence={[
        "self taught ", 2000,
        "frontend Developer", 2000,
      ]}
      wrapper='span'
      speed={75}
      repeat={Infinity}
    />
  )
}

export default Animation
