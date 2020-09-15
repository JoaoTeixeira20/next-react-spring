import { animated, useSpring, to } from 'react-spring'
import Layout from '../components/main/Layout'
import { SpringContext } from './../context/SpringContext';

const parallax = (x, y, distance) => {
  //fix for window variable access, since it's client-side we don't have immediate access to the window property
  try{
    const parallaxRes = [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    return `perspective(600px) rotateX(${parallaxRes[0]}deg) rotateY(${parallaxRes[1]}deg) translate3D(-50%,-50%,${distance}px)`
  }catch (error){
    return ``
  }
}

export default function Parallax(){

  const { mousePos } = React.useContext(SpringContext)

  const tilesStyle = {
    position:"absolute",
    width:"100px",
    height:"100px",
    left:"50%",
    top:"50%",
    transformOrigin: "0 0 0",
    border:"1px solid black",
  }

  return (
    <>
      <animated.div style={{...tilesStyle,
        transform: mousePos.to((x,y) => parallax(x,y,0)),
      }}>mid parallax</animated.div>
      <animated.div style={{...tilesStyle,
        transform: mousePos.to((x,y) => parallax(x,y,-200)),
        width: "0",
        height: "0",
        borderLeft: "50px solid transparent",
        borderRight: "50px solid transparent",
        borderBottom: "100px solid black"
      }}>back parallax</animated.div>
      <animated.div style={{...tilesStyle,
        transform: mousePos.to((x,y) => parallax(x,y,200)),
        borderRadius:"50%",
      }}>front parallax</animated.div>
    </>
  )
}