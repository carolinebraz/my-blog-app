import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { search, update, register } from '../../services/Service';
import { toastAlert } from '../../util/toastAlert';
import Post from '../../models/Post';
import Topic from '../../models/Topic';

function PostForm() {
    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const { user, handleLogout } = useContext(AuthContext);
    const token = user.token;

    const [topics, setTopics] = useState<Topic[]>([]);

    const [topic, setTopic] = useState<Topic>({
        id: 0,
        descricao: '',
    });

    const [post, setPost] = useState<Post>({
        id: 0,
        titulo: '',
        texto: '',
        data: '',
        tema: null,
        usuario: null,
    });

    async function searchPostById(id: string) {
        await search(`/postagens/${id}`, setPost, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function searchTopicById(id: string) {
        await search(`/temas/${id}`, setTopic, {
            headers: {
                Authorization: token,
            },
        });
    }

    async function searchTopics() {
        await search('/temas', setTopics, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        if (token === '') {
            toastAlert('You must be logged in', 'warning');
            navigate('/');
        }
    }, [token]);


    useEffect(() => {
        searchTopics();
        if (id !== undefined) {
            searchPostById(id);
        }
    }, [id]);

    useEffect(() => {
        setPost({
            ...post,
            tema: topic,
        });
    }, [topic]);

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
            tema: topic,
            usuario: user,
        });
    }

    function back() {
        navigate('/posts');
    }

    async function addPost(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id != undefined) {
            try {
                await update(`/postagens`, post, setPost, {
                    headers: {
                        Authorization: token,
                    },
                });

                toastAlert('Successfully update post', 'success');
                back();

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlert('Token has expired, please login again', 'error')
                    handleLogout()
                } else {
                    toastAlert('Error updating post', 'error');
                }
            }
        } else {
            try {
                await register(`/postagens`, post, setPost, {
                    headers: {
                        Authorization: token,
                    },
                });

                toastAlert('Succesfully register post', 'success');
                back();

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlert('Token has expired, please login again', 'error')
                    handleLogout()
                } else {
                    toastAlert('Error registering post', 'error');
                }
            }
        }
    }

    const loadingTopic = topic.descricao === '';

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Edit Post' : 'Add Post'}</h1>

            <form onSubmit={addPost} className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Title</label>
                    <input
                        value={post.titulo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        type="text"
                        placeholder="Title"
                        name="titulo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Content</label>
                    <input
                        value={post.texto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        type="text"
                        placeholder="Text"
                        name="texto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Topic</p>
                    <select name="tema" id="topic" className='border p-2 border-slate-800 rounded' onChange={(e) => searchTopicById(e.currentTarget.value)}>
                        <option value="" selected disabled>Select a topic</option>
                        {topics.map((topic) => (
                            <>
                                <option value={topic.id} >{topic.descricao}</option>
                            </>
                        ))}
                    </select>
                </div>
                <button disabled={loadingTopic} type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
                    {loadingTopic ? <span>Loading</span> : id !== undefined ? 'Edit' : 'Add'}
                </button>
            </form>
        </div>
    );
}

export default PostForm;