import { getPostData, getSortedPostsData } from '../../../lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'


// export async function metadata({params}) {

//   const posts = getSortedPostsData()
//   const {postId} = params

// const post = posts.find(post => post.id === postId )

// if(!post){
// return{
//   title:'post not found'
// }
// }

// return (
//   post.title
// )
// }



export default  async function Post({params}) {

    const posts = getSortedPostsData()
    const {postId} = params

    if(!posts.find(post => post.id === postId)){
        return notFound()
    }

    const {title, date,minutesToRead , contentHtml, author, heroImage, tags} = await getPostData(postId)

  return (
    <main className="pt-28 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      
    {/* Hero Image */}
    {heroImage && (
      <div className="mb-10">
        <img
          src={heroImage}
          alt="Blog Cover"
          className="rounded-2xl w-full object-cover max-h-[420px]"
        />
      </div>
    )}

    {/* Title */}
    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
      {title}
    </h1>

    {/* Author + Date + Read Time */}
    <div className="flex items-center gap-4 mb-10 text-sm text-gray-600 dark:text-gray-400">
      {author?.avatarUrl && (
        <img
          src={author.avatarUrl}
          alt={author.name}
          className="w-10 h-10 rounded-full"
        />
      )}
      <div>
        <p className="font-medium">{author?.name}</p>
        <p>
          {new Date(date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          · {minutesToRead} min read
        </p>
      </div>
    </div>

    {/* Blog Content */}
    <article className="prose dark:prose-invert prose-lg max-w-none">
      <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>

    {/* Tags */}
    {tags?.length > 0 && (
      <div className="mt-12 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-3 py-1 text-sm rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    )}

    {/* Back Link */}
    <div className="mt-16">
    <p className="text-md md:text-2xl mb-4">Back to <a href="/" className="text-red-500 underline cursor-pointer">home page</a> </p>
    </div>
  </main>
  )
}

