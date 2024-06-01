import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import articalService from "../services/article";
import Button from "../components/Button";
import Container from "../components/Container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

function Artical() {

    const [artical, setArtical] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.user.userData);

    const isAuthor = artical && userData ? artical.userId === userData.$id : false;


    useEffect(() => {
        if (slug) {
            articalService.getArticle(slug).then((post) => {
                if (post) {
                    setArtical(post);        
                    
                }
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);


    const deletePost = () => {
        articalService.deleteArticle(artical.$id).then((status) => {
            if (status) {
                articalService.deleteImage(artical.image);
                navigate("/");
            }
        });
    };

    return artical ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                
                    
                    <img
                        src={articalService.getImagePreview(artical.image)}
                        alt={artical.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${artical.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{artical.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(artical.content)}
                </div>
            </Container>
        </div>
    ) : null;
}

export default Artical