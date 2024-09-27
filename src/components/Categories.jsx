import React from 'react'
import { ListGroup } from 'reactstrap'
import { ListGroupItem } from 'reactstrap'
import { allCategories } from '../utils'

export const Categories = ({setselectedcateg, selectedCateg}) => {

  
  console.log(allCategories());
  return (
    <div className="d-flex justify-content-center">
      <ListGroup horizontal>
          {allCategories().map(item=>
            <ListGroupItem
           className={selectedCateg==item?"categ bg-warning text-light":"categ bg-light text-warning"} onClick={()=>setselectedcateg(item)} key={item}>{item}</ListGroupItem>)}
          
          
      </ListGroup>
    </div>
  )
}

