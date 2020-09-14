import { useSpring, animated, to } from 'react-spring';
import { useGesture } from 'react-use-gesture';

export default function OffsetExample() {

  const [{ pos, scale }, set] = useSpring(() => ({ pos: [0,0], scale: 1 }))

  const [ boxMessage, setBoxMessage ] = React.useState("hi, play with me")

  const translation = ([x, y],s) => `translate3D(${x}px, ${y}px, 0) scale(${s})`

  const bind = useGesture({
    onMouseMove: ( {clientX, clientY} ) => {
      set({scale: 2})
      setBoxMessage(`hovering, mouseX ${clientX} mouseY ${clientY}`)
    },
    onMouseLeave: () => {
      set({scale: 1})
      setBoxMessage("you stopped hovering the box")
    },
    onDrag: ({down, delta}) => {
      set({pos: down ? delta : [0,0], scale: 2})
      setBoxMessage("you're dragging the box'")
      //console.log('down', down, 'position', movement)
    },
    onDragEnd: () => {
      set({scale:1})
      setBoxMessage("you released the box")
    },
    onMouseUp: () => {
      set({scale: 1})
      setBoxMessage("you're mousing up the box")
    }
  })

  return <animated.div 
  {...bind()} 
  style={{backgroundColor:"lightgray", width:"100px", height :"100px" , touchAction:"none",
    transform: to([pos,scale],
      translation
      )}}>{boxMessage}</animated.div>
}
