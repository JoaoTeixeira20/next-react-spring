import Layout from './components/main/Layout';
import { useSpring, animated, to } from 'react-spring';
import { useGesture } from 'react-use-gesture';

export default function SpringWithoutContextExample(){

  const [{ mousePos }, set] = useSpring(() => ({ mousePos: [0,0] }))

  //const [ mousePosState, setmousePosState ] = React.useState('')

  const bind = useGesture({
    onMouseMove: ( {clientX, clientY} ) => {
      set({mousePos: [clientX, clientY]})
      //set({mousePos: xy})
      console.log(`mouse position is x:${clientX} y:${clientY}`)
    },
  })

  return (<Layout>
    <div {...bind()} style={{width:"100%", height:"100%"}}></div>
    <animated.div  style={{
      width:"100px",
      height:"100px",
      borderRadius:"50px",
      border:"1px solid black",
      transform: mousePos.to((x,y) => `translate3D(${x}px, ${y}px, 0) translate3D(-50%, -50%, 0)`)
    }}>yo</animated.div>
  </Layout>)

}