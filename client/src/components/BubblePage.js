import React, { useState, useEffect } from "react";


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import {fetchColor} from "../api/fetchColors"

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
console.log("this is the color list",colorList)  

useEffect(()=>{
  fetchColor()
  .then(res=>{setColorList(res.data)
  
  })
  .catch(err => console.log("axios get error", err)) 
}, [])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
