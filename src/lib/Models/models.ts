export interface IHeader {
    name: string;
    length: number;
}

export interface ITodo {
    text: string
}

export interface ITodos {
    _id: string;
    __v: number;
    done: boolean;
    text: string;
}

export interface IRawTodos {
    [key: string]: {
        _id: string;
        __v: number;
        done: boolean;
        text: string;
    };
}