import { useRouter } from 'next/router'
import { IndexPage } from '../page-components'
import { PostPage } from '../page-components/post/[id]'

const pathArrayIs = (expectedPathArr: string[], actualPathArr: string[]) => {
  let arrIsCorrect = true
  if (expectedPathArr.length !== actualPathArr.length) arrIsCorrect = false

  expectedPathArr.forEach((item, i) => {
    if (expectedPathArr[i] === 'dynamicParam') return
    if (expectedPathArr[i] !== actualPathArr[i]) arrIsCorrect = false
  })

  return arrIsCorrect
}

const Index = () => {
  const router = useRouter()
  const path = router.asPath.split('?')[0]
  const pathArr = path.split('/').filter(string => string !== '')

  // simple routing checker
  if (pathArrayIs([], pathArr)) return <IndexPage />
  if (pathArrayIs(['post', 'dynamicParam'], pathArr)) return <PostPage />

  return <div></div> // fallback for time during router resolving
}

export default Index
