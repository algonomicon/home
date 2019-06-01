import React from "react"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"
import serializers from "../utils/serializers"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout, Main, Sidebar, Minion } from "../components"

export const query = graphql`
  query($slug: String!) {
    algorithm: sanityAlgorithm(slug: { current: { eq: $slug } }) {
      title
      _rawContent
      _createdAt
      _updatedAt
    }
  }
`

export default ({ data: { algorithm } }) => (
  <Layout>
    <Helmet>
      <title>{algorithm.title} | Algonomicon</title>
    </Helmet>
    <Main>
      <Title>{algorithm.title}</Title>
      <BlockContent blocks={algorithm._rawContent} serializers={serializers} />
    </Main>
    <Sidebar>
      <div>
        <Minion>Meta</Minion>
        <Meta>
          <Field>Created: {algorithm._createdAt}</Field>
          <Field>Updated: {algorithm._updatedAt}</Field>
        </Meta>
      </div>
    </Sidebar>
  </Layout>
)

const Title = styled.h1`
  margin-top: 0;
`

const Meta = styled.div`
  padding: 1rem 0;
`

const Field = styled.p`
  margin: 0;
`