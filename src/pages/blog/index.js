import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { post } from './styles.module.css'


const BlogPage = ({data}) => {
   return (
    <>
      <Layout pageTitle="Every Post Ever">
        <br></br>
        <div className={post}>
          {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
          <Link to={`/blog/${node.slug}`}>
            <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt="" />
            <h2>{node.frontmatter.title}</h2>
          </Link>
           {node.frontmatter.date} | {node.timeToRead}-minute read
           <br/><br/><br/>
          </article>
        ))
      }
        </div>
      </Layout>
    </> 
    )
}

export const query = graphql`
  
{
  allMdx(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        date
        title
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 450, height: 350)
          }
        }
      }
      id
      slug
      timeToRead
    }
  }
}

`

export default BlogPage

