import Link from 'next/link'

export default function Header() {
  return <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
    <Link href="/"><button>index</button></Link> |
    <Link href="/springcontextexample"><button>2D prespective</button></Link> |
    <Link href="/springwithoutcontextexample"><button>mouse handler</button></Link> |
    <Link href="/parallax"><button>parallax</button></Link>
  </div>
}