import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const Animation = () => {
  return (
    <TypeAnimation className="text-white"
      sequence={[
        "Self-Taught", 2000,
        "Frontend Developer", 2000,
      ]}
      wrapper='span'
      speed={75}
      repeat={Infinity}
    />
  )
}

export default Animation
