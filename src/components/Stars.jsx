
// packages
import React, { useState, useEffect, useRef } from 'react'

// styles
import "../stylesheets/Stars.css"


function Stars () {
    //
    // function getWindowDimensions() {
    //     const {innerWidth: width, innerHeight: height} = window;
    //     return {width, height};
    // }
    //
    // // window size
    // let [windowDims, setWindowDims] = useState(getWindowDimensions)
    //
    // // settings
    // const starMinSize = 3;
    // const starMaxSize = 45;
    // const starMinVelocity = 3;
    // const starMaxVelocity = 10;
    // const starMinSpinVelocity = 2;
    // const starMaxSpinVelocity = 9;
    // const starColors = ["yellow", "aqua", "chartreuse", "violet", "salmon", "dodgerblue"];
    // const gravityStrength = 5;
    //
    // // canvas ref
    // const canvasRef = useRef(null)
    //
    // // stars state
    // let [stars, setStars] = useState([])
    //
    // function generateStar (canvas) {
    //     function randInt(min, max) {
    //         return Math.floor(Math.random() * (max - min)) + min;
    //     }
    //     let xInit = randInt(0, canvas.width);
    //     let yInit = randInt(0, canvas.width);
    //     let vxInit = randInt(starMinVelocity, starMaxVelocity)
    //     let vyInit = randInt(starMinVelocity, starMaxVelocity)
    //     let canvasPosition = randInt(0, 4)
    //     switch (canvasPosition) {
    //         // right
    //         case 0:
    //             xInit = canvas.width;
    //             vxInit = -vxInit;
    //             break;
    //         // top
    //         case 1:
    //             yInit = 0;
    //             break;
    //         // left
    //         case 2:
    //             xInit = 0;
    //             break;
    //         // bottom
    //         case 3:
    //             yInit = canvas.height;
    //             vyInit = -vyInit;
    //             break;
    //     }
    //     return {
    //         x: xInit,
    //         y: yInit,
    //         spin: randInt(0, 360),
    //         vx: vxInit,
    //         vy: vyInit,
    //         vspin: randInt(starMinSpinVelocity, starMaxSpinVelocity),
    //         size: randInt(starMinSize, starMaxSize),
    //         color: starColors[randInt(0, starColors.length)]
    //     };
    // }
    //
    // function drawStar(ctx, star) {
    //     let coords = [0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
    //         let rad_angle = (angle + star.spin) * Math.PI / 180
    //         return [star.x + Math.cos(rad_angle) * star.size, star.y + Math.sin(rad_angle) * star.size]
    //     })
    //     ctx.beginPath();
    //     ctx.lineWidth = star.size / 5;
    //     ctx.lineJoin = "round";
    //     ctx.lineCap = "round";
    //     ctx.strokeStyle = star.color;
    //     ctx.moveTo(coords[0][0], coords[0][1]);
    //     ctx.lineTo(coords[3][0], coords[3][1]);
    //     ctx.lineTo(coords[6][0], coords[6][1]);
    //     ctx.lineTo(coords[1][0], coords[1][1]);
    //     ctx.lineTo(coords[4][0], coords[4][1]);
    //     ctx.lineTo(coords[7][0], coords[7][1]);
    //     ctx.lineTo(coords[2][0], coords[2][1]);
    //     ctx.lineTo(coords[5][0], coords[5][1]);
    //     ctx.lineTo(coords[0][0], coords[0][1]);
    //     ctx.fillStyle = star.color;
    //     ctx.fill()
    //     ctx.stroke();
    // }
    //
    // function incrementStars(stars, frameCount) {
    //     return stars.map(star => {
    //         let newStar = {...star}
    //         newStar.x += frameCount*0.05
    //         newStar.y += frameCount*0.05
    //         return newStar
    //     })
    // }
    //
    // function draw(ctx, frameCount) {
    //     const newStars = incrementStars(stars, frameCount)
    //     setStars(newStars)
    //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    //     newStars.forEach(star => drawStar(ctx, star))
    // }
    //
    // useEffect(() => {
    //     const canvas = canvasRef.current
    //     setStars([generateStar(canvas), generateStar(canvas), generateStar(canvas)])
    // }, [generateStar])
    //
    // useEffect(() => {
    //     const canvas = canvasRef.current
    //     const ctx = canvas.getContext('2d')
    //     let frameCount = 0
    //     draw(ctx, frameCount)
    //     // let animationFrameId
    //     //
    //     // // stars.forEach(star => drawStar(star, ctx))
    //     // // let new_star = generateStar(canvas)
    //     // // drawStar(new_star, ctx)
    //     //
    //     // //Our draw came here
    //     // const render = () => {
    //     //     frameCount++
    //     //     draw(ctx, frameCount)
    //     //     animationFrameId = window.requestAnimationFrame(render)
    //     // }
    //     // render()
    //     //
    //     // // console.log(stars)
    //     // return () => {
    //     //     window.cancelAnimationFrame(animationFrameId)
    //     // }
    // }, [draw])


    return (
        <canvas
            id="landing_canvas"
            className='canvas'
            // ref={canvasRef}
            // height={`${windowDims.height}`}
            // width={`${windowDims.width}`}
        >
        </canvas>
    );
}

export default Stars;

