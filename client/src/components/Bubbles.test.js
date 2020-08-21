import React, { useState, useEffect } from "react";
import { Pack } from "@potion/layout";
import { Svg, Circle } from "@potion/element";
import {screen,render} from "@testing-library/react"
import Bubbles from "./Bubbles"

const colorListData = 
    [
      {code: {hex: "#f0f8ff"},
      color: "aliceblue",
      id: 1},
      {code: {hex: "#00ffff"},
      color: "aqua",
      id: 3}
    ]
  

test('should render the Bubbles component without crashing', () => {
    //render the Bubbles component
   const {rerender, getByText} = render(<Bubbles colors={[]} />)

   // rerender the Bubbles component with the new props 
   rerender(<Bubbles colors={colorListData} />)
   
   // assert
  const bubbles = getByText(/bubbles/i)
  expect(bubbles).toBeInTheDocument()
  
})
