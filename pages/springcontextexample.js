import { animated, to } from 'react-spring';
import Layout from './components/main/Layout';
import { SpringContext } from './context/SpringContext';

export default function SpringContextExample(){

  const { mousePos } = React.useContext(SpringContext)

  const [ rectanglePosition, setrectanglePosition ] = React.useState({x:0,y:0})

  const rectangleRef = React.useRef()

  const angleCenterAndPoint = ((cx, cy, px, py) => {

    function quadrant(cx, cy, px, py){
      if (px > cx && py > cy){
        return 'Q1'
      }else if( px < cx && py > cy){
        return 'Q2'
      }else if(px < cx && py < cy){
        return 'Q3'
      }else if (px > cx && py < cy){
        return 'Q4'
      }else{
        return 'Infinite'
      }
    }

    console.log(quadrant(cx, cy, px, py))

    //console.log('angle is ', Math.atan2(py - cy, px - cx) * 180 / Math.PI)
    console.log('origin is x:',cx.toFixed(0),' y:',cy.toFixed(0))
    console.log('point is x:',px.toFixed(0),' y:',py.toFixed(0))
    let result = (Math.atan2(py - cy, px - cx) * 180 / Math.PI)
    result  = (result + 360) % 360;

    return (result)
  })

  React.useEffect(() => {
    //console.log(rectangleRef.current)
    //const y = rectangleRef.current.getBoundingClientRect().left + (rectangleRef.current.getBoundingClientRect().width/2)
    //const x = rectangleRef.current.getBoundingClientRect().top + (rectangleRef.current.getBoundingClientRect().height/2)
    const x = 0
    const y = window.innerHeight / 2
    //console.log('the value is ', rectangleRef.current.getBoundingClientRect())
    console.log('Origin is:: x is ',x,' y is ',y)
    setrectanglePosition({x:x,y:y})
  },[rectangleRef.current])

  return(<Layout>
    <animated.div style={{
      transform: mousePos.to((x,y) => `translate3D(${x}px, ${y}px, 0) translate3D(-50%, -50%, 0)`), 
      width:"50px",
      height:"50px",
      borderRadius:"25px",
      border:"1px solid black",
      position:"absolute",
      left:0,
      top:0,
      pointerEvents:"none"}}/>
  <animated.div style={{
    position:"absolute",
    right:0,
    top:0,
    transform: mousePos.to((x,y) => `translate3D(0, ${y}px, 0) translate3D(-50%, -50%, 0)`),
  }}
  >Y</animated.div>
  <animated.div style={{
    position:"absolute",
    left:0,
    bottom:0,
    transform: mousePos.to((x,y) => `translate3D(${x}px, 0, 0) translate3D(-50%, -50%, 0)`),
  }}
  >X</animated.div>
  <animated.div ref={rectangleRef} style={{
    position:"absolute",
    left:0,
    bottom:"50%",
    transformOrigin: "0 50% 0",
    transform: mousePos.to((x,y) => `translate3D(0%,50%,0) rotate(${angleCenterAndPoint(rectanglePosition.x, rectanglePosition.y, x, y)}deg)`),
    border:"1px solid black",
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
    transform:"translate3D(-50%,-50%,0) rotate(45deg)"
  }}></div>
    
  </Layout>)
}