import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate()
    return (
        <>
            <h2 className="text-slate-900 text-5xl m-4">Login</h2>
            <div>

                <button type="submit"
                    onClick={() => { navigate('/home') }}
                    className="hover:underline mx-4">
                    Home [useNavigate]
                </button>
                
                <Link to='/home' className="hover:underline mx-4">Home [Link]</Link>
           
            </div>
        </>
    )
}

export default Login;