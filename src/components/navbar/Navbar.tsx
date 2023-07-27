import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-[#190493] text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase'>My Blog</div>

                    <div className='flex gap-4'>
                        <Link to='/login' className='hover:underline'>Login</Link>
                        <Link to='/home' className='hover:underline'>Home</Link>
                        <div className='hover:underline'>Posts</div>
                        <div className='hover:underline'>Topics</div>
                        <div className='hover:underline'>Add topics</div>
                        <div className='hover:underline'>Profile</div>
                        <div className='hover:underline'>Logout</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar