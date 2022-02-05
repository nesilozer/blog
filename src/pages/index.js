import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import { box } from "./styles.module.css"
import { paraph, picture, title } from './styles.module.css'

const IndexPage = ({pageTitle, children}) => {
    return(
     <main>
         <Layout>
             <title className={title}>{pageTitle}</title>
             <div className={picture}>
            <StaticImage 
                src="../images/nes.png"
                width={236}
                height={266}
                imgStyle={{ borderRadius: '50%' }}
                alt="selfie"
                />
              </div>
             <p className={paraph}>Hey there, I'm Nesil Ozer. I am currently studying masters in international
             economics in Schmalkalden, Germany. I'm crypto enthusiast and this blog contains blockchain technologies which I am going to cover.</p> 
            <p className={box}>Want to get in touch?<br/>
             Follow me on <a href="https://twitter.com/fachtti"><em>twitter </em></a> and say hi!</p>
        </Layout> 
     </main>
    )
}

export default IndexPage