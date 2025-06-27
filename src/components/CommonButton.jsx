import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export const CommonButton = ({btnText}) => {

   const [bgColor, setBgColor] = useState("#FF6900");

  return (
   <Button
          type="submit"
          className="p-2 border-0  fw-bold  rounded-0 fs-5 mt-2 mt-sm-0"
          style={{ backgroundColor: bgColor, width: "180px"}}
          onMouseEnter={()=> setBgColor("#d45800")}
          onMouseLeave={()=> setBgColor("#FF6900")}
        >
          {btnText}
        </Button>
  )
}
