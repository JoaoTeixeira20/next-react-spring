import { useSpring, useTrail, config as SpringConfig } from 'react-spring';
import { useGesture } from 'react-use-gesture';

export const SpringContext = React.createContext()

const SpringContextProvider = (props) => {

  //react-spring config needed to be imported this way because it conflicts with some next config with the same name
  const [{ mousePos }, set] = useSpring(() => ({ mousePos: [0,0], config:SpringConfig.wobbly }));
  const [trail, setTrail] = useTrail(3, () => ({xy: [0,0], config:SpringConfig.wobbly}));

  const bindMove = useGesture({
    onMouseMove: ( {clientX, clientY} ) => {
      set({mousePos: [clientX, clientY]})
      setTrail({xy: [clientX, clientY]})
    },
    onClick: ( {clientX, clientY} ) => {
      console.log('X:',clientX,'Y:',clientY)
    }
  })
  return (<SpringContext.Provider value={{bindMove ,mousePos, trail}}>
    {props.children}
  </SpringContext.Provider>)
}

export default SpringContextProvider