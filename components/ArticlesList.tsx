import React, { useEffect, useState } from 'react'
import { IArticle } from '../types/IArticle'
import { IArticles } from '../types/IArticles'
import { ArticleItem } from './ArticleItem'
import { SkeletonCard } from './SkeletonCard'

export const ArticlesList = ({ articles }: IArticles) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (articles) {
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }
  }, [articles])

  //array fill of 3 items
  let skeletonCards = Array(3).fill(0)

  return (
    <>
      {loading ? (
        skeletonCards.map((index: number) => <SkeletonCard key={index} />)
      ) : (
        <div className="flex flex-col items-center justify-around">
          {articles.map((article: IArticle) => (
            <ArticleItem key={article.id} article={article} />
          ))}
        </div>
      )}
    </>
  )
}
