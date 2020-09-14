import { animated, to } from 'react-spring';
import Layout from '../components/main/Layout';
import { SpringContext } from '../context/SpringContext';
//import { useResizeObserver } from 'use-resize-observer';

export default function SpringContextExample(){

  const { mousePos, trail } = React.useContext(SpringContext)

  const [ rectanglePosition, setrectanglePosition ] = React.useState({x:0,y:0})

  const rectangleRef = React.useRef()

  const angleCenterAndPoint = ((cx, cy, px, py) => Math.atan2(py - cy, px - cx) * 180 / Math.PI)

  React.useEffect(() => {
    const resizeObject = () => {
      //console.log('width', rectangleRef.current.getBoundingClientRect().width)
      //console.log('height', rectangleRef.current.getBoundingClientRect().height)
      //console.log('yo i got resized')
      //const y = rectangleRef.current.getBoundingClientRect().top + (rectangleRef.current.getBoundingClientRect().height/2)
      //const x = rectangleRef.current.getBoundingClientRect().left + (rectangleRef.current.getBoundingClientRect().width/2)
      const y = window.innerHeight / 2
      const x = 0
      setrectanglePosition({x:x,y:y})
      console.log(rectangleRef.current.getBoundingClientRect())
    }
    const p1 = new ResizeObserver(resizeObject)
    p1.observe(rectangleRef.current)
    return () => p1.unobserve(rectangleRef.current)
  },[])

  return(<Layout>
    {trail.map((props, index) => 
    <animated.div key={index} style={{
      transform: props.xy.to((x,y) => `translate3D(${x}px, ${y}px, 0) translate3D(-50%, -50%, 0)`),
      opacity: index === 0 ? 1 : 0.3,
      width:"4vh",
      height:"4vh",
      borderRadius:"50%",
      border:"1px solid blue",
      position:"absolute",
      left:0,
      top:0,
      pointerEvents:"none"}}/>)} 
  <animated.div style={{
    position:"absolute",
    right:0,
    top:0,
    color:"red",
    transform: mousePos.to((x,y) => `translate3D(0, ${y}px, 0) translate3D(-50%, -50%, 0)`),
  }}
  >Y</animated.div>
  <animated.div style={{
    position:"absolute",
    left:0,
    bottom:0,
    color:"red",
    transform: mousePos.to((x,y) => `translate3D(${x}px, 0, 0) translate3D(-50%, -50%, 0)`),
  }}
  >X</animated.div>
  <animated.div ref={rectangleRef} style={{
    position:"absolute",
    top:rectanglePosition.y+"px",
    left:rectanglePosition.x+"px",
    transformOrigin: "0 50% 0",
    transform: mousePos.to((x,y) => `translate3D(0%,-50%,0) rotate(${angleCenterAndPoint(rectanglePosition.x, rectanglePosition.y, x, y)}deg)`),
    border:"1px solid green",
    width:"30%",
    height:"10%",
  }}/>
  <div style={{
    position:"absolute",
    border:"1px solid black",
    top:rectanglePosition.y+"px",
    left:rectanglePosition.x+"px",
    width:"10px",
    height:"10px",
    transform:"translate3D(-50%,-50%,0) rotate(0deg)"
  }}></div>
    
  </Layout>)
}