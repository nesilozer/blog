import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {
    socialLinks,
    socialLinksText,
} from './styles.module.css'
import "@fontsource/open-sans" 

const SocialLinks = () => {
    return (
    <ul className={socialLinks}>
        <li className={socialLinksText}>
          <a href="https://twitter.com/fachtti"><FontAwesomeIcon icon={faTwitter} size="lg" color="blue" alt="icon" /></a>
        </li>
        <li className={socialLinksText}>
          <a href="https://www.linkedin.com/in/nesilozer/"><FontAwesomeIcon icon={faLinkedin} size="lg" color="blue" alt="icon" /></a>
        </li>
     </ul>
    )
}

export default  SocialLinks