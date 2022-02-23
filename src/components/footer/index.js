import * as React from 'react'
import { footer } from './styles.module.css'
import SocialLinks from '../header/components/social-links'


const Footer = () => {
    return (
        <footer className={footer}>
            <p>Made by Nesil Ozer © 2022</p> 
            <SocialLinks />
        </footer>  
    )
}

export default Footer