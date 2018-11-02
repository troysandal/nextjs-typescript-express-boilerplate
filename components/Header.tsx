import Link from 'next/link'
import TypescriptComponent from './tscomp'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home Page</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <TypescriptComponent />
    </div>
)

export default Header