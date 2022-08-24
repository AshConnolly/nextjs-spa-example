import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { GetPost } from '../../lib/postdata_api'
import { PostData } from '../../types/postdata'

export const PostPage = () => {
  const [postData, setPostData] = useState<null | PostData>(null)
  const router = useRouter()
  console.log('router: ', router)

  useEffect(() => {
    if (!router.isReady) return
    const pathArr = router.asPath.split('/').slice(1)
    const [, id] = pathArr
    GetPost(id).then(r => setPostData(r))
  }, [router.isReady])

  if (!postData) return <p>Loading...</p>

  return (
    <main>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <h1>{postData.title}</h1>

      <p>{postData.body}</p>

      <Link href="/">
        <a>Go back to home</a>
      </Link>
    </main>
  )
}
