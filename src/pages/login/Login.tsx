import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext'

function Login() {
    const { name, setName } = useContext(UserContext);
    let navigate = useNavigate()

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        navigate('/home')
    }

    return (
        <>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit}>
                    <h2 className="text-slate-900 text-5xl  m-4">Login</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="usuario">Name</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Write your name here"
                            className="border-2 border-slate-700 rounded p-2"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <button type='submit' className="my-4 rounded bg-indigo-400 hover:bg-indigo-900 text-white w-1/2 py-2 flex justify-center">
                        <span>Log in</span>
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;