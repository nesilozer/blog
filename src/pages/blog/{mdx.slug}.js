import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage} from 'gatsby-plugin-image'
import { lay } from './{mdx.slug}.module.css'


const BlogPost = ({ data }) => {
  const image= getImage(data.mdx.frontmatter.hero_image)
  return (
    <>
      <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className={lay}>
       <p>{data.mdx.frontmatter.date} | {data.mdx.timeToRead}-minute read</p>
        <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
         />
      </div>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
    </>
    )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      date
      hero_image {
        id
        childImageSharp {
          gatsbyImageData(width: 550, height: 350)
        }
      }
      title
      hero_image_alt
    }
    body
    timeToRead
  }
}
`
export default BlogPost