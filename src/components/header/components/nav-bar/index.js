import * as React from 'react'
import { Link } from 'gatsby'
import { 
    navLinks, 
    navLinkItem,
} from  './styles.module.css'

const Navbar = () => {
    return (
        <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to="/">Home</Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
    )
}

export default Navbar