import { SpringContext } from '../../context/SpringContext'
import { animated } from 'react-spring'
import Header from './Header'
import { useRouter } from 'next/router'

export default function Layout(props){

  const { trail, bindMove } = React.useContext(SpringContext)

  const router = useRouter()

  const PageContent = props.children

  console.log('children props ', props.children)
  //console.log('layout props ', props)
  console.log('router props', props)

  return(
    <div {...bindMove()} style={{width:"100vw", height:"100vh", maxWidth:"100%", maxHeight:"100%", backgroundColor:"lightblue"}}>
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
      <Header/>
      <div>{props.children}</div>
    </div>)
}