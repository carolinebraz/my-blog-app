import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';
import instagram from '../../assets/icons/instagram.png';

function Footer() {
    return (
        <>
            <div className="flex justify-center bg-[#f5f5f5] text-[#190493]">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>&copy; 2023 - My Blog</p>
                    <p className='text-lg'>Follow me</p>
                    <div className='flex gap-2'>
                        <img src={github} alt="Logo GitHub" />
                        <img src={linkedin} alt="Logo LinkedIn" />
                        <img src={instagram} alt="Logo Instagram" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer