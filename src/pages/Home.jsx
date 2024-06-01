import React, { useEffect, useState } from 'react'
import Container from '../components/Container';
import ArticalCard from '../components/Card/ArticleCard'
import articalService from "../services/article";
import { useSelector } from "react-redux";

function Home() {

  const [articals, setArticals] = useState([])

  const userData = useSelector((state) => state.user.userData);



  useEffect(() => {
    articalService.gatAllActiveArticle().then((posts) => {
      if (posts) {
        setArticals(posts.documents)
      }
    })
  }, [])

  if (!userData) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to Read the blog
              </h1>
            </div>
          </div>
        </Container>
      </div>
    )
  }


  if (articals.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                No Artical is present
              </h1>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className='w-full h-full py-8 '>
      <Container>
        <div className='flex flex-wrap'>
          {articals.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <ArticalCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home