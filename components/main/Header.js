import Link from 'next/link'

export default function Header() {
  return <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
    <Link href="/"><a>index</a></Link> |
    <Link href="/springcontextexample"><a>spring context</a></Link> |
    <Link href="/springwithoutcontextexample"><a>mouse handler test</a></Link> |
    <Link href="/parallax"><a>parallax</a></Link>
  </div>
}