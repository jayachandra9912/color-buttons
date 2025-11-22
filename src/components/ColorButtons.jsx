import React, { useState } from 'react'

const ColorButtons = () => {
    const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "pink",
    "yellow",
    "teal",
    "brown"
  ]
  const [buttonColors,setButtonColors] = useState(Array(9).fill(null))
  const [disabledButtons,setDisabledButtons] = useState(Array(9).fill(false))
  const [nextColorIndex,setNextColorIndex] = useState(0)

  const handleClick = (index)=>{
    if (disabledButtons[index]) return;
    if (nextColorIndex >= colors.length) return;

    setButtonColors((prev) => {
        const updated = [...prev];
        updated[index] = colors[nextColorIndex];
        return updated;
    });

    setDisabledButtons((prev) => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
    });

    setNextColorIndex((prev) => prev + 1);

  }

  return (
    <div style={{display: "grid",gridTemplateColumns: "repeat(3,100px)",gap:"10px"}}>
        {
            buttonColors.map((color,index) => (
                <button key={index} onClick={()=>handleClick(index)}
                    disabled={disabledButtons[index]}
                    style={{
                        width: "100px",
                        height: "50px",
                        backgroundColor: color || "lightgray",
                        border: "1px solid #ccc",
                        cursor: disabledButtons[index] ? "not-allowed" : "pointer",
                        borderRadius: "10px"

                    }}>
                        {color ? color: `Button ${index + 1}`}

                </button>
            ))
        }
    </div>
  )
}

export default ColorButtons