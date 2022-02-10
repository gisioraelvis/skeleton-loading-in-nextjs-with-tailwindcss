import React, { useEffect, useState } from 'react'
import { Meta } from '../../components/Meta'
import { IArticle } from '../../types/IArticle'
import Link from 'next/link'
import { SkeletonCard } from '../../components/SkeletonCard'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const articles = await res.json()

  const paths = articles.map((article: IArticle) => ({
    params: { id: article.id.toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  )
  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

const article = ({ article }: { article: IArticle }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (article) {
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
  }, [article])
  return (
    <>
      {loading ? (
        <SkeletonCard />
      ) : (
        <>
          <Meta title={article.title} description={article.body.slice(0, 20)} />
          <main className="flex w-full flex-1 flex-col items-center  px-20 text-center">
            <div className="mt-12 w-1/2 rounded-xl border p-6 text-left">
              <h1 className="text-2xl font-bold">{article.title}</h1>
              <p className="mt-4 text-xl">{article.body}</p>
            </div>
            <button className="mt-6 hover:text-blue-600 focus:text-blue-600">
              <Link href="/">
                <a>&larr;Back Home</a>
              </Link>
            </button>
          </main>
        </>
      )}
    </>
  )
}

export default article
