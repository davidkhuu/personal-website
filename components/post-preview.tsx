import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  category: string
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  category,
  slug,
}: Props) => {
  return (
    <div className="md:grid lg:grid-cols-3 md:grid-cols-1 md:gap-x-16 lg:gap-x-8 mb-18">
      <div>
        <CoverImage slug={slug} title={title} src={coverImage} category={category} />
      </div>
      <div>
        <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
          <Link as={`/posts/${category}/${slug}`} href="/posts/[category]/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="mb-4 md:mb-0 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
    </div>
  )
}

export default PostPreview
