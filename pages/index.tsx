import RecentPosts from '../components/recent-posts'
import Page from '../components/page'
import { getAllPosts } from '../lib/api'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <Page>
      <RecentPosts recentPosts={allPosts} />
    </Page>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
