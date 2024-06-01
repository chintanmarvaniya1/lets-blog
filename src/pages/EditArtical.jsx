import React, {useEffect, useState} from 'react'
import Container from '../components/Container';
import ArticalForm from '../components/ArticalForm/ArticalForm'
import articalService from "../services/article";
import { useNavigate,  useParams } from 'react-router-dom';

function EditArtical() {
    const [artical, setArtical] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            articalService.getArticle(slug).then((post) => {
                if (post) {
                    setArtical(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return artical ? (
        <div className='py-8'>
            <Container>
                <ArticalForm post={artical} />
            </Container>
        </div>
      ) : null
}

export default EditArtical