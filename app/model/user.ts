export type Gender = {
    type: number,
    value: string
}

export class User {
    name: string;
    gender: Gender;
    height: number;
    weight: number;
    constructor(name: string, gender: Gender, height: number, weight: number) {
        this.name = name;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    }
}