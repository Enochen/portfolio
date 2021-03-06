import { graphql, useStaticQuery } from 'gatsby'
import React, { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'

type MetaTag =
  | { name: string; content: any }
  | { property: string; content: any }

interface SEOProps {
  title?: string
  description?: string
  lang?: string
  meta?: MetaTag[]
}

export const SEO: FunctionComponent<SEOProps> = ({
  title = ``,
  description = ``,
  lang = `en`,
  meta = [],
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const metaTitle = title || site.siteMetadata.title
  const titleTemplate = title ? `%s | ${site.siteMetadata.title}` : metaTitle
  const metaDescription = description || site.siteMetadata.description
  const metaTags = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    ...meta,
  ]
  return (
    <Helmet
      defer={false}
      htmlAttributes={{ lang }}
      title={metaTitle}
      titleTemplate={titleTemplate}
      meta={metaTags}
    />
  )
}
