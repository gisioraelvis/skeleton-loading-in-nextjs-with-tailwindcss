import { ArticlesList } from '../components/ArticlesList'
import { Header } from '../components/Header'
import { IArticles } from '../types/IArticles'

export default function Home({ articles }: IArticles) {
  return (
    <>
      <Header />
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
