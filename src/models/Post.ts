import Topic from './Topic';
import User from './User';

export default interface Post {
    id: number;
    titulo: string;
    texto: string;
    data: string;
    tema: Topic | null;
    usuario: User | null;
}