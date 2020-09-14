import { Globals, useSpring, animated, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import OffsetExample from './OffsetExample';


export default function Example(){

  const [ NumberVisibility, setNumberVisibility ] = React.useState(false)

  const [ AnimationState, setAnimationState ] = React.useState(false)

  const toggleAnimations = () => {
    setAnimationState(prevState => !prevState)
  }

  React.useEffect(() => {
    Globals.assign({
      skipAnimation:AnimationState
    })
  },[AnimationState])

  const toggleNumberVisibility = () => {
    setNumberVisibility(prevState => !prevState)
  }

  const props = useSpring({
    //opacity: NumberVisibility ? 1: 0,
    backgroundColor: NumberVisibility ? "lightblue" : "black", 
    color: NumberVisibility ? "black" : "white",
    number: NumberVisibility ? 1 : 0,
    transform: `translate3D(${NumberVisibility ? -100 : 0}px,0,0)`,
    config: config.default})

  const [{ x, y , scale} , set] = useSpring(() => ({ x: 0, y: 0, config: config.wobbly }))
  
  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    set({ x: down ? mx : 0, y: down ? my : 0 , scale: down ? "1.2" : "1.0"})
  })

  return (
    <React.Fragment>
      <div style={{position:"absolute",left:"50%", top:"50%", transform:`translate(-50%,-50%)`}}>
      <OffsetExample/>
        <animated.div style={props}>{props.number.to(number => number.toFixed(5))}</animated.div>
        <button onClick={toggleNumberVisibility}>toggle me</button>
        <animated.div {...bind()} style={{x, y, scale, backgroundColor:"lime", touchAction:"none"}}>drag me</animated.div>
      </div>
      <button onClick={toggleAnimations} style={{position:"absolute", bottom:0, left:"50%", transform:`translate(-50%,0%)`}}>toggle animation?</button>
    </React.Fragment>)
  }