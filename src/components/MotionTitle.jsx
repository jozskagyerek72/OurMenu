import React from 'react'
import {motion} from "framer-motion"

export const MotionTitle = () => {
  return (
    <motion.h1
        className="text-center"
        initial={{opacity:0,scale:0.5}}
        animate={{x:[50,150,0], opacity:1, scale:1}}
        transition={{duration:2,delay:0.3}}
    >
        𝓞𝓾𝓻 𝓜𝓮𝓷𝓾𝓼
    </motion.h1>
  )
}


