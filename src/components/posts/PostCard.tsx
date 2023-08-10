import { Link } from 'react-router-dom';
import Post from '../../models/Post';
import avatar from '../../assets/img/avatar.png';

interface PostCardProps {
    post: Post
}

function PostCard({ post }: PostCardProps) {
    return (
        <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
            <div>
                <div className="flex w-full bg-[#190493] py-2 px-4 items-center gap-4">
                    {post.usuario?.foto == "" ? (
                        <img src={avatar} className='h-12 rounded-full' alt={`${post.usuario?.nome} doesn't have a profile picture`} />
                    ) : (
                        <img src={post.usuario?.foto} className='h-12 rounded-full' alt={`${post.usuario?.nome}'s profile picture`} />
                    )
                    }
                    <h3 className='text-lg font-bold text-center text-white uppercase '>{post.usuario?.nome}</h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
                    <p className='indent-8 text-justify'>{post.texto}</p>
                    <div className='text-left'>
                        <p>Topic: {post.tema?.descricao}</p>
                        <p>Date: {new Intl.DateTimeFormat(undefined, {
                            dateStyle: 'full',
                            timeStyle: 'medium',
                        }).format(new Date(post.data))}</p>
                    </div>
                </div>
            </div>
            <div className="flex">
                <Link to={`/deletePost/${post.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Delete</button>
                </Link>
                <Link to={`/editPost/${post.id}`} className='w-full text-slate-100 bg-[#110867] hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Edit</button>
                </Link>
            </div>
        </div>
    )
}

export default PostCard