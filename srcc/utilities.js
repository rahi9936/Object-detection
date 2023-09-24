export const drawRect = (detections,ctx)=>{
detections.forEach(prediction=>{
        //getting prediction result
        const[x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];

        //set style


        const color = '#'+Math.floor(Math.random()*16777215).toString(16);
        ctx.strokeStyle=color
        ctx.font='32px Arial Bold'
        ctx.fillStyle = color

        //draw rectangle and text
        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.rect(x,y,width,height)
        ctx.stroke()

    })

}