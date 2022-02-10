import Link from 'next/link'
import React from 'react'
import { IArticle } from '../types/IArticle'

export const ArticleItem = ({ article }: { article: IArticle }) => {
  return (
    <>
      <Link href={`/article/${article.id}`}>
        <a className="mt-12 w-1/2 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
          <h3 className="text-2xl font-bold">{article.title} &rarr;</h3>
          <p className="mt-4 text-xl">{article.body.slice(0, 100)}</p>
        </a>
      </Link>
    </>
  )
}
