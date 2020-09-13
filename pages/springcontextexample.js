import { animated, to } from 'react-spring';
import Layout from './components/main/Layout';
import { SpringContext } from './context/SpringContext';

export default function SpringContextExample(){

  const { mousePos } = React.useContext(SpringContext)

  return(<Layout>
    <animated.div style={{
      transform: mousePos.to((x,y) => `translate3D(${x}px, ${y}px, 0) translate3D(-50%, -100%, 0)`), 
      width:"100px",
      height:"100px",
      borderRadius:"50px",
      border:"1px solid black",
      position:"absolute"}}></animated.div>
    im the example
  </Layout>)
}