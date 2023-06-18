import React, {useState} from 'react'

const ColorPicker = ({colors}) => {

    const [showColor, setShowColor] = useState(false);
  const [selectColor, setSelectColor] = useState(null);

  const handleClick = ()=> {
    setShowColor(!showColor)
  }

  const handleColorClick = (color)=> {
    setSelectColor(color)
    setShowColor(false)
  }

  return (
    <div>
      <button onClick={handleClick}>Pick a Colour</button>
      {showColor && (
        <ul>
          {colors.map((color, index) => (
            <li
              key={index}
              style={{
                backgroundColor: color,
                width: '50px',
                height: '50px',
                display: 'inline-block',
                margin: '5px',
                cursor: 'pointer'
              }}
              onClick={() => handleColorClick(color)}
            ></li>
          ))}
        </ul>
      )}
      {selectColor && <p>Selected color: {selectColor}</p>}
    </div>
  )
}

export default ColorPicker
