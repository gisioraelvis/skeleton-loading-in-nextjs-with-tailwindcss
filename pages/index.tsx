import { ArticlesList } from '../components/ArticlesList'
import { IArticles } from '../types/IArticles'

export default function Home({ articles }: IArticles) {
  return (
    <>
      <div>
        <h1 className="text-6xl font-bold">
          Welcome To <span className="text-blue-600">WebDev Newz</span>
        </h1>
      </div>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <ArticlesList articles={articles} />
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const data = await res.json()

  return {
    props: {
      articles: data,
    },
  }
}
