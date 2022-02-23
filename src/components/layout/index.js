import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../header'
import './global-styles.css'
import Footer from '../footer'
import { container, 
    heading, 
    siteTitle,
    main,
} from  './styles.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  return (
    <>
      <div className={container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <Header />
        <h1 className={heading}>{pageTitle}</h1>
        <main className={main}>
          {children}
        </main>
      </div>
      <Footer />
    </>
    )
}

export default Layout