import React, { useState } from "react";

import {axiosWithAuth} from "../utils/axiosWithAuth"

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [colorToAdd, setColorToAdd] = useState(initialColor)

const updatingColors = () => {
  axiosWithAuth()
  .get("colors")
  .then(res=>updateColors(res.data))
  .catch(err => console.log("axios get error", err)) 
}

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    
    axiosWithAuth() 
    .put(`colors/${colorToEdit.id}`, colorToEdit)
    .then(()=>{
      updatingColors()
      setEditing(!editColor)
    })
    .catch(err=> console.log(err))
  };

  const deleteColor = color => {
    axiosWithAuth() 
    .delete(`colors/${color.id}`)
    .then(()=>{
      updatingColors()
    })
    .catch(err=> console.log(err))
  };

  const addColor = (e) => {
    e.preventDefault();
    
    axiosWithAuth() 
    .post(`colors`, colorToAdd)
    .then(()=>{
      updatingColors()
      setColorToAdd(initialColor)
    })
    .catch(err=> console.log(err))
  }
 
  

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li  key={color.color} onClick={() => editColor(color)}>
            <span>
              <span  className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                   
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
     
     
      <div>
            
            <form
             onSubmit={addColor}
             >
          <legend>Add New Color:</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToAdd({ ...colorToAdd, color: e.target.value })
              }
              value={colorToAdd.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToAdd({
                  ...colorToAdd,
                  code: { hex: e.target.value }
                })
              }
              value={colorToAdd.code.hex}
            />
          </label>
          <button>Add Color!</button>
            </form>
        </div>



      <div className="spacer" />
      
    </div>
  );
};

export default ColorList;
