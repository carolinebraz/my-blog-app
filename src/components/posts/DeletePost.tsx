import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { search, remove } from '../../services/Service';
import { toastAlert } from '../../util/toastAlert';
import Post from '../../models/Post';

function DeletePost() {
    const [post, setPost] = useState<Post>({} as Post)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { user, handleLogout } = useContext(AuthContext)
    const token = user.token

    async function searchPostById(id: string) {
        try {
            await search(`/postagens/${id}`, setPost, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlert('Token has expired, please login again', 'error')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlert('You must be logged in', 'warning')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            searchPostById(id)
        }
    }, [id])

    function back() {
        navigate("/posts")
    }

    async function deletePost() {
        try {
            await remove(`/postagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            })
            toastAlert('Successfully deleted post', 'success')

        } catch (error) {
            toastAlert('Error deleting post', 'error')
        }
        back()
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Delete post</h1>

            <p className='text-center font-semibold mb-4'>Are you sure you want to delete this post?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Post</header>
                <div className="p-4">
                    <p className='text-xl h-full'>{post.titulo}</p>
                    <p>{post.texto}</p>
                </div>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={back}>No</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletePost}>
                        Yes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletePost