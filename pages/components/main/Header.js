import Link from 'next/link'

export default function Header() {
  return <div style={{display:"flex", flexDirection:"row"}}>
    <Link href="/"><a>index</a></Link> |
    <Link href="/springcontextexample"><a>spring context</a></Link> |
    <Link href="/springwithoutcontextexample"><a>spring without context</a></Link>
  </div>
}