import { SpringContext } from '../../context/SpringContext'
import Header from './Header'

export default function Layout(props){

  const { bindMove } = React.useContext(SpringContext)

  return(
    <div {...bindMove()} style={{width:"100vw", height:"100vh", maxWidth:"100%", maxHeight:"100%", backgroundColor:"lightblue"}}>
      <Header/>
      <div>{props.children}</div>
    </div>)
}