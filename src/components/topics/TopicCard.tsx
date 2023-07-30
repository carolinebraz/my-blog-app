import { Link } from 'react-router-dom'
import Topic from '../../models/Topic'

interface TopicCardProps {
    topic: Topic
}

function TopicCard({ topic }: TopicCardProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-[#190493] text-white font-bold text-2xl'>Topic {topic.id}</header>
            <p className='p-8 text-2xl bg-slate-200 h-full'>{topic.descricao}</p>
            <div className="flex">
                <Link to={`/deleteTopic/${topic.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Delete</button>
                </Link>
                <Link to={`/editTopic/${topic.id}`} className='w-full text-slate-100 bg-[#110867] hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Edit</button>
                </Link>
            </div>
        </div>
    )
}

export default TopicCard