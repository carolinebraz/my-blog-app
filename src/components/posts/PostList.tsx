import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { search } from '../../services/Service';
import { toastAlert } from '../../util/toastAlert'
import Post from '../../models/Post';
import PostCard from '../posts/PostCard';

function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);

    let navigate = useNavigate();

    const { user, handleLogout } = useContext(AuthContext);
    const token = user.token;

    useEffect(() => {
        if (token === '') {
            toastAlert('You must be logged in', 'warning');
            navigate('/');
        }
    }, [token]);

    async function searchPosts() {
        try {
            await search('/postagens', setPosts, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlert('Token has expired, please login again', error)
                handleLogout()
            }
        }
    }

    useEffect(() => {
        searchPosts();
    }, [posts.length]);
    
    return (
        <>
            {posts.length === 0 && (
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </>
    );
}

export default PostList;