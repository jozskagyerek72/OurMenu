import React,{useState, useEffect} from 'react'
import { data } from '../data';

export const Menus = ({selectedCateg}) => {
  console.log(selectedCateg);

  const [menus,setMenus] = useState(null)

  useEffect(()=>{
    setMenus(selectedCateg=="all" ? data : data.filter(obj=>obj.category==selectedCateg))
  },[selectedCateg])

  menus && console.log(menus);

  function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

  return (
    <div className="menu">
      {menus&&menus.map(obj=>
      <div key={obj.id} className="border card">
        <h3>{titleCase(obj.title)}</h3>
        <div className="descr">{obj.desc}</div>
        <div className="ar">Price: {obj.price}</div>
        <img className="img-thumbnail img-fluid" src={"images/images/"+obj.img} alt={obj.title} />
      </div>
        )}
    </div>
  )
}


