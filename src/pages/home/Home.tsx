function Home() {
    return (
        <>
            <div>

                <div className='grid grid-cols-12 gap-2 m-4'>
                    <div className='col-span-6 bg-purple-300'>
                        Container 1
                    </div>

                    <div className='col-span-6 bg-cyan-200'>
                        Container 2
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-2 m-4'>
                    <div className='col-span-8 bg-blue-300'>
                        Container 1
                    </div>

                    <div className='col-span-4 bg-violet-200'>
                        Container 2
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-2 m-4'>
                    <div className='col-span-4 bg-green-300'>
                        Container 1
                    </div>

                    <div className='col-span-4 bg-emerald-200'>
                        Container 2
                    </div>

                    <div className='col-span-4 bg-lime-500'>
                        Container 3
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-2 m-4'>
                    <div className='col-span-3 bg-red-300'>
                        Container 1
                    </div>

                    <div className='col-span-3 bg-amber-200'>
                        Container 2
                    </div>

                    <div className='col-span-3 bg-orange-500'>
                        Container 3
                    </div>

                    <div className='col-span-3 bg-yellow-500'>
                        Container 4
                    </div>
                </div>

                <div className='grid grid-cols-12 gap-2 m-4'>
                    <div className='col-span-4 bg-sky-300'>
                        Container 1
                    </div>

                    <div className='col-span-4 bg-pink-200'>
                        Container 2
                    </div>

                    <div className='col-span-2 bg-fuchsia-500'>
                        Container 3
                    </div>

                    <div className='col-span-2 bg-rose-500'>
                        Container 4
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Home;