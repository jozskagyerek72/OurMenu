import React from 'react'
import { Categories } from './Categories'
import { MotionTitle } from './MotionTitle'

export const StickyHeader = ({setselectedcateg,selectedCateg}) => {
  return (
    <div className="sticky ">
        <MotionTitle/>
        <Categories setselectedcateg={setselectedcateg} selectedCateg={selectedCateg}/>

    </div>
  )
}


