import { User } from "./User";

export class Post {
    user : User
    id: number;
    caption: string;
    path: string;

    constructor(user: User, id: number, caption: string, path: string) {
        this.user = user;
        this.id = id;
        this.caption = caption;
        this.path = path;
    }
}