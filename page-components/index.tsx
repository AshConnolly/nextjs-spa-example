import Head from 'next/head'
import { useEffect, useState } from 'react'
import Post from '../components/post'
import { GetPosts } from '../lib/postdata_api'
import { PostData } from '../types/postdata'

export const IndexPage = () => {
  const [postDataList, setPostDataList] = useState<null | PostData[]>(null)

  useEffect(() => {
    async function fetchPosts() {
      const posts: PostData[] = await GetPosts()
      setPostDataList(posts)
    }
    fetchPosts()
  }, [])

  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>

      <h1>List of posts</h1>

      <section>
        {postDataList && postDataList.map((post: PostData) => <Post {...post} key={post.id} />)}
      </section>
    </main>
  )
}
