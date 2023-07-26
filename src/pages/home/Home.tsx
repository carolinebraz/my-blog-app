function Home() {
    return (
        <>
            <div>
                <h3 className='text-xl'>justify-content [alinhamento horizontal dos elementos]</h3>
                <h5>justify-start: alinha os elementos à esquerda</h5>
                <div className="flex flex-row  justify-start m-3">
                    <div className='basis-1/4 bg-blue-200'>01</div>
                    <div className='basis-1/4 bg-blue-800'>02</div>
                </div>
                <h5>justify-end: alinha os elementos à direita</h5>
                <div className="flex flex-row  justify-end m-3">
                    <div className='basis-1/4 bg-blue-200'>01</div>
                    <div className='basis-1/4 bg-blue-800'>02</div>
                </div>
                <h5>justify-center: alinha os elementos ao centro</h5>
                <div className="flex flex-row  justify-center m-3">
                    <div className='basis-1/4 bg-blue-200'>01</div>
                    <div className='basis-1/4 bg-blue-800'>02</div>
                </div>
                <h5>justify-between: adiciona espaço entre os elementos</h5>
                <div className="flex flex-row  justify-between m-3">
                    <div className='basis-1/4 bg-blue-200'>01</div>
                    <div className='basis-1/4 bg-blue-800'>02</div>
                </div>
                <h5>justify-around: adiciona espaço ao redor dos elementos</h5>
                <div className="flex flex-row  justify-around m-3">
                    <div className='basis-1/4 bg-blue-200'>01</div>
                    <div className='basis-1/4 bg-blue-800'>02</div>
                </div>
            </div>

            <div className='mt-12'>
                <h3 className='text-xl'>items-content [alinhamento vertical dos elementos]</h3>
                <div className='w-auto h-60 bg-blue-800 flex justify-center items-start m-3'>
                    <div className='basis-1/4 bg-blue-200'>justify-center items-start alinhamento horizontal centro/vertical topo</div>
                </div>
                <div className='w-auto h-60 bg-blue-800 flex  justify-center items-center m-3'>
                    <div className='basis-1/4 bg-blue-200'>justify-center items-start alinhamento horizontal centro/vertical centro</div>
                </div>
                <div className='w-auto h-60 bg-blue-800 flex  justify-center items-end m-3'>
                    <div className='basis-1/4 bg-blue-200'>justify-center items-start alinhamento horizontal centro/vertical base</div>
                </div>
            </div>
        </>
    );
}

export default Home;