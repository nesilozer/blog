import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

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
      <li className={socialLinksText}>
        <a href="https://github.com/nesilozer"><FontAwesomeIcon icon={faGithub} size="lg" color="blue" alt="icon" /></a>
      </li>
    </ul>
  )
}

export default  SocialLinks