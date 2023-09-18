import Head from 'next/head'
import { GetStaticProps } from 'next'
import Script from 'next/script'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPagesWithSlugs, getAllPostsForHome } from '../lib/api'
import Navigation from '../components/navigation'

export default function Index({ allPosts: { edges }, allPages, preview }) {
  
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)
  
  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Arsmej Entertainment`}</title>
      </Head>
      <Navigation data={allPages} isLoading={false} />
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)
  const allPages = await getAllPagesWithSlugs()

  return {
    props: { allPosts, allPages, preview },
    revalidate: 10,
  }
}
