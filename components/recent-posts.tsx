import PostPreview from './post-preview';
import SectionTitle from './section-title';
import Post from '../types/post'

type Props = {
  recentPosts: Post[]
}

const RecentPosts = ({ recentPosts }: Props) => {
  return (
    <section>
      <SectionTitle>Recent Posts</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {recentPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            category={post.category}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}

export default RecentPosts
