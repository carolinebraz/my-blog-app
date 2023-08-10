import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { search, remove } from '../../services/Service';
import { toastAlert } from '../../util/toastAlert';
import Topic from '../../models/Topic';

function DeleteTopic() {
    const [topic, setTopic] = useState<Topic>({} as Topic)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { user, handleLogout } = useContext(AuthContext)
    const token = user.token

    async function searchById(id: string) {
        try {
            await search(`/temas/${id}`, setTopic, {
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
            searchById(id)
        }
    }, [id])

    function back() {
        navigate("/topics")
    }

    async function deleteTopic() {
        try {
            await remove(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })
            toastAlert('Successfully deleted topic', 'success')

        } catch (error) {
            toastAlert('Error deleting topic', 'error')
        }

        back()
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Delete topic</h1>
            <p className='text-center font-semibold mb-4'>Are you sure you want to delete this topic?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-[#190493] text-white font-bold text-2xl'>Topic</header>
                <p className='p-8 text-2xl bg-slate-200 h-full'>{topic.descricao}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={back}>No</button>
                    <button className='w-full text-slate-100 bg-[#110867] hover:bg-indigo-600 flex items-center justify-center' onClick={deleteTopic}>
                        Yes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteTopic