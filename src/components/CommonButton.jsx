import React from 'react'
import { Button } from 'react-bootstrap'

export const CommonButton = ({btnText}) => {
  return (
   <Button
          type="submit"
          className="p-2 border-0 rounded-0 fs-5 mt-2 mt-sm-0"
          style={{ backgroundColor: "#FF6900", width: "180px" }}
        >
          {btnText}
        </Button>
  )
}
