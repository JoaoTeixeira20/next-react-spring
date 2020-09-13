import { SpringContext } from '../../context/SpringContext'
import Header from './Header'

export default function Layout(props){

  const { bindMove } = React.useContext(SpringContext)

  return(
    <div {...bindMove()} style={{width:"100vw", height:"100vh", backgroundColor:"lightblue"}}>
      <Header/>
      <div style={{height:"100%"}}>{props.children}</div>
    </div>)
}