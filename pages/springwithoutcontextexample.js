import { useSpring, animated } from 'react-spring';

export default function SpringWithoutContextExample(){

  const [{ mousePosition }, set] = useSpring(() => ({ mousePosition: [0,0] }))

  const moveBall = event => {
    const x = event.clientX;
    const y = event.clientY
    set({mousePosition: [x, y]})
      //set({mousePos: xy})
    console.log(`mouse position is x:${x} y:${y}`)
  }

  return (
    <>
    <div onMouseMove={moveBall} style={{width:"100vw", height:"100vh"}}></div>
    <animated.div  style={{
      transform: mousePosition.to((x,y) => `translate3D(${x}px, ${y}px, 0) translate3D(-50%, -50%, 0)`),
      width:"100px",
      height:"100px",
      borderRadius:"50px",
      border:"1px solid black",
      position:"absolute",
      left:0,
      top:0,
      pointerEvents:"none",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>{mousePosition.to((x,y) => `x:${x.toFixed(0)},y:${y.toFixed(0)}`)}</animated.div>
    </>)

}