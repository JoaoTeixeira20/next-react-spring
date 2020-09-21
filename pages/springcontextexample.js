import { animated, to, useSpring } from 'react-spring';
import { SpringContext } from '../context/SpringContext';
//import { useResizeObserver } from 'use-resize-observer';

export default function SpringContextExample(){

  const { mousePos } = React.useContext(SpringContext)

  const [ RectState, setRectState ] = React.useState({x:0,y:0})

  const [ RectYAxisCompensation, setRectYAxisCompensation ] = React.useState(0)

  const [ { rectanglePosition }, setrectanglePosition ] = useSpring(() => (
    {rectanglePosition: [0, 0]}
    ))

  const containerRef = React.useRef()

  const angleCenterAndPoint = ((cx, cy, px, py) => Math.atan2(py - cy, px - cx) * 180 / Math.PI)

  React.useLayoutEffect(() => {
    const p1 = new ResizeObserver(() => { 
      setTimeout(() => setRectYAxisCompensation(containerRef.current.getBoundingClientRect().y),1000)
    })
    console.log(containerRef.current.getBoundingClientRect().y)
    p1.observe(containerRef.current)
    return () => {
      p1.unobserve(containerRef.current)
    }
  },[])

  const changePos = () => {
    let y = RectState.x
    let x = RectState.y
    //x = x === 0 ? window.innerWidth : 0
    y = y === 0 ? window.innerHeight/2 : 0
    setRectState({x:x,y:y})
    setrectanglePosition({rectanglePosition : [x, y]})
  }

  return(<div ref={containerRef}>
  <animated.div style={{
    position:"absolute",
    right:0,
    top:0,
    color:"red",
    transform: mousePos.to((_,y) => `translate3D(0, ${y - RectYAxisCompensation}px, 0) translate3D(-50%, -50%, 0)`),
  }}
  >Y</animated.div>
  <animated.div style={{
    position:"absolute",
    left:0,
    bottom:0,
    color:"red",
    transform: mousePos.to((x,_) => `translate3D(${x}px, 0, 0) translate3D(-50%, -50%, 0)`),
  }}
  >X</animated.div>
  <animated.div style={{
    position:"absolute",
    top: rectanglePosition.to((_,top) => `${top}px`),
    left: rectanglePosition.to((left,_) => `${left}px`),
    transformOrigin: "0 50% 0",
    transform: to([mousePos,rectanglePosition], ([x,y],[left,top]) => `translate3D(0%,-50%,0) rotate(${angleCenterAndPoint(left, top, x, y - RectYAxisCompensation)}deg)`),
    border:"1px solid green",
    width:"30%",
    height:"10%",
    pointerEvents:"none"
  }}/>
  <animated.div style={{
    position:"absolute",
    border:"1px solid black",
    top: rectanglePosition.to((_,top) => `${top}px`),
    left: rectanglePosition.to((left,_) => `${left}px`),
    width:"10px",
    height:"10px",
    transform:"translate3D(-50%,-50%,0) rotate(0deg)"
  }}></animated.div>
  <div style={{position:"absolute", left:"50%", top:"80%"}}>
    <button onClick={changePos}>Change me</button>
  </div>
  </div>)
}