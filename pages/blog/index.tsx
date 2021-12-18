import Container from "@components/container";
import Layout from "@components/layout";
import MoreStories from "@components/more-stories";
import { getAllPosts } from "@lib/api";
import Post from "@src/types/post"

type Props = {
  allPosts: Post[]
}

export default function Blog({ allPosts }: Props) {
  const morePosts = allPosts;
  return (
    <>
      <Layout>
        <Container>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ])

  return {
    props: { allPosts },
  }
}
