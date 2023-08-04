import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { search } from '../../services/Service';
import { Dna } from 'react-loader-spinner';
import { toastAlert } from '../../util/toastAlert';
import TopicCard from '../topics/TopicCard';
import Topic from '../../models/Topic';

function TopicList() {
    let navigate = useNavigate();

    const [topics, setTopics] = useState<Topic[]>([]);

    const { user, handleLogout } = useContext(AuthContext);
    const token = user.token;

    async function searchTopics() {
        try {
            await search('/temas', setTopics, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlert('Token has expired, please login again', 'error')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlert('You must be logged in', 'warning');
            navigate('/login');
        }
    }, [token]);

    useEffect(() => {
        searchTopics();
    }, [topics.length]);

    return (
        <>
            {topics.length === 0 && (
                <Dna
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topics.map((topic) => (
                            <>
                                <TopicCard key={topic.id} topic={topic} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopicList;