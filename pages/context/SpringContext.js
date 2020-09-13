import { useSpring } from 'react-spring';
import { useGesture } from 'react-use-gesture';

export const SpringContext = React.createContext()

const SpringContextProvider = (props) => {

  const [{ mousePos }, set] = useSpring(() => ({ mousePos: [0,0] }))

  const bindMove = useGesture({
    onMouseMove: ( {clientX, clientY} ) => {
      set({mousePos: [clientX, clientY]})
    },
    onClick: ( {clientX, clientY} ) => {
      console.log('X:',clientX,'Y:',clientY)
    }
  })
  return (<SpringContext.Provider value={{bindMove ,mousePos}}>
    {props.children}
  </SpringContext.Provider>)
}

export default SpringContextProvider