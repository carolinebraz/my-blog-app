import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { update, search, register } from '../../services/Service';
import { toastAlert } from '../../util/toastAlert';
import Topic from '../../models/Topic';

function TopicForm() {
    const [topic, setTopic] = useState<Topic>({} as Topic);

    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const { user, handleLogout } = useContext(AuthContext);
    const token = user.token;

    async function searchById(id: string) {
        await search(`/temas/${id}`, setTopic, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        if (id !== undefined) {
            searchById(id)
        }
    }, [id])

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setTopic({
            ...topic,
            [e.target.name]: e.target.value
        })
    }

    async function addTopic(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await update(`/temas`, topic, setTopic, {
                    headers: {
                        'Authorization': token
                    }
                })

                toastAlert('Successfully updated topic', 'success')
                back()

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlert('Token has expired, please login again', 'error')
                    handleLogout()
                } else {
                    toastAlert('Error updating topic', 'error')
                }

            }

        } else {
            try {
                await register(`/temas`, topic, setTopic, {
                    headers: {
                        'Authorization': token
                    }
                })

                toastAlert('Successfully registered topic', 'success')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    toastAlert('Token has expired, please login again', 'error')
                    handleLogout()
                } else {
                    toastAlert('Error registering topic', 'error')
                }
            }
        }
        back()
    }

    function back() {
        navigate("/topics")
    }

    useEffect(() => {
        if (token === '') {
            toastAlert('You must be logged in', 'warning');
            navigate('/login');
        }
    }, [token]);

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Add a new topic' : 'Edit topic'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={addTopic}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Description</label>
                    <input
                        type="text"
                        placeholder="Description"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={topic.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto block"
                    type="submit"
                >
                    {id === undefined ? 'Add' : 'Edit'}
                </button>
            </form>
        </div>
    );
}

export default TopicForm;