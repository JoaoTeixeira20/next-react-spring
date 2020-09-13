import { useSpring } from 'react-spring';
import { useGesture } from 'react-use-gesture';

export const SpringContext = React.createContext()

const SpringContextProvider = (props) => {

  const slow = { mass: 10, tension: 200, friction: 50 }

  const [{ mousePos }, set] = useSpring(() => ({ mousePos: [0,0], config:slow }))

  //const [ mousePosState, setmousePosState ] = React.useState('')

  const bindMove = useGesture({
    onMouseMove: ( {clientX, clientY} ) => {
      set({mousePos: [clientX, clientY]})
      //set({mousePos: xy})
      //setmousePosState(`mouse position is x:${clientX} y:${clientY}`)
    },
  })

  // React.useEffect(() => {
  //   console.log('mouse pos updated to ', mousePosState)
  // },[mousePosState])

  return (<SpringContext.Provider value={{bindMove ,mousePos}}>
    {props.children}
  </SpringContext.Provider>)
}

export default SpringContextProvider