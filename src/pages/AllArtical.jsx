import React, { useState, useEffect } from 'react'
import Container from '../components/Container';
import ArticleCard from '../components/Card/ArticleCard'
import articalService from "../services/article";

function AllArtical() {
    const [articals, setArticals] = useState([])
    useEffect(() => {
        articalService.gatAllActiveArticle([]).then((posts) => {
            if (posts) {
                setArticals(posts.documents)
            }
        })
     }, [])
    

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {articals.map((artical) => (
                        <div key={artical.$id} className='p-2 w-1/4'>
                            <ArticleCard {...artical} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllArtical