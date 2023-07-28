import Post from "./Post";

export default interface User {
    id: number;
    name: string;
    user: string;
    avatar: string;
    password: string;
    post?: Post | null;
}