import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import SEO from "~/src/components/seo"
import Layout from "~/src/layouts/layout"
import Markdown from "~/src/styles/markdown"
import { rhythm } from "~/src/styles/typography"

const Index = () => {
  const data = useStaticQuery<Queries.Query>(graphql`
    query About {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index/" } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `)

  const markdown = data.allMarkdownRemark?.edges[0].node.html

  return (
    <Layout>
      <SEO title="About" />
      <Container
        dangerouslySetInnerHTML={{ __html: markdown ?? "" }}
        rhythm={rhythm}
      ></Container>
      <CTA>
        <ContactUs href="https://app.reclaim.ai/m/matrixcrafter/quick-meeting">Contact Us</ContactUs>
      </CTA>
    </Layout>
  )
}

const ContactUs = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-floating-button-border);
  border-radius: 0.25rem;
  font-size: 1.25rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  background-color: var(--color-floating-button);
  color: var(--color-floating-button-text);

  &:hover {
    background-color: var(--color-floating-button-hover);
    color: var(--color-floating-button-text-hover);
    border-color: var(--color-floating-button-border-hover);
  }
`

const CTA = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`

const Container = styled(Markdown).attrs({
  as: "main",
})`
  width: var(--post-width);
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin-top: var(--sizing-xl);
    width: 87.5%;
  }

  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: var(--sizing-lg);

    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.75rem;
    }
  }

  h3 {
    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.25rem;
    }
  }
`

export default Index
