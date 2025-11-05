export class User {
    id: number;
    username: string;
    frist_name: string;
    last_name: string;
    email: string;
    image_path: string;

    constructor(id: number, username: string, first_name: string, last_name: string, email: string, image_path: string) {
        this.id = id;
        this.username = username;
        this.frist_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.image_path = image_path;
    }
}