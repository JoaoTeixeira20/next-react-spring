import { animated, useTransition, config } from 'react-spring'

const items = ['hello','this','is','flip','magic']

const Item = ({style, value}) => (
  <animated.div style={{...style,
    position:"absolute",
    width:"140px",
    height:"140px",
    left:"50%",
    top:"50%",
    border:"1px solid black",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"}}><p style={{transform:"rotate(45deg)", fontSize:"3em"}}>{value}</p></animated.div>
);

export default function Layout(){

  const [index, setIndex] = React.useState(0);

  const next = () => {
    setIndex(prevState => (prevState + 1) % items.length);
  };

  const transition = useTransition(items[index], {
    from: { opacity: 0, transform: 'translate3D(0%, -50%, 0) rotate(-45deg)' },
    enter: { opacity: 1, transform: 'translate3D(-50%, -50%, 0) rotate(45deg)' },
    leave: { opacity: 0, transform: 'translate3D(-100%, -50%, 0) scale(0deg)' },
    config: config.stiff
  });

  return (
    <div className="App" onClick={next}>
      {/* {transition(Item)} */}
      {transition ((style,item) => <Item style={style} value={item}/>)}
    </div>
  );
}