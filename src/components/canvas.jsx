import React, { useState, useEffect, useRef } from "react"
const Canvas = ({index,colorData}) => {
   
    console.log("index: ", `${index}`);
    
    const[image,setImage] = useState(null)
    
    const canvas = useRef(null)

    useEffect(() => {
        const canvasImage = new Image();
        canvasImage.src = `${index}`;
        console.log('canvasImage :', canvasImage)
        canvasImage.onload = () => setImage(canvasImage)
  
    },[index])

    

    useEffect(() =>{
        if(image&&canvas){
            const ctx=canvas.current.getContext("2d");
            console.log("color: ",colorData)
            ctx.fillStyle = colorData
            ctx.fillRect((window.innerWidth - image.width)/2-20,(window.innerHeight - image.height)/2-155,image.width+40,image.height+40)
            ctx.drawImage(image,(window.innerWidth - image.width)/2,(window.innerHeight - image.height)/2-135)
        }
    }, [image,canvas,colorData])
    return (
        <div>
            <div >
                <canvas
                    ref={canvas}
                    width = {window.innerWidth}
                    height={window.innerHeight}
                />
            </div>
        </div>
    )
}

export default Canvas;