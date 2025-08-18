import React from 'react'
import ReactDOM from "react-dom"
import './OffCanvas.css'



const BackDrop = () => {
    return <div className="backDrop"></div>
}

const OffCanvasOverlay = ({children}) => {
    return (
        <div className="offCanvas">
            <div className="content">
            {children}
            </div>
        </div>
    )
}
const OffCanvas = ({children}) => {
    const portal = document.getElementById("overlays");
  return (
    <>
    {
        ReactDOM.createPortal(<BackDrop/>,portal)
    },
    {
        ReactDOM.createPortal(<OffCanvasOverlay>{children}</OffCanvasOverlay>,portal)
    }
    
    </>
  )
}

export default OffCanvas
