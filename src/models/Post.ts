import Topic from './Topic';
import User from './User';

export default interface Post {
    id: number;
    title: string;
    text: string;
    date: string;
    topic: Topic | null;
    user: User | null;
}