import React from 'react'
import { Link } from 'react-router-dom'
import articleService from '../../services/article'

function ArticleCard({$id,title,image}) {
  return (
    <Link to={`/artical/${$id}`}>
        <div className='w-full rounded-xl p-1.5 bg-custom-primary-dark'>
            <div className='w-full justify-center mb-4'>
              <div className='rounded-l object-cover'>
              <img src={articleService.getImagePreview(image)}
                alt={title}
                ></img>
              </div>
                
            </div>
            <h2 className='text-white text-xl font-bold pl-2 mb-2'>{title}</h2>

        </div>
    </Link>
  )
}

export default ArticleCard