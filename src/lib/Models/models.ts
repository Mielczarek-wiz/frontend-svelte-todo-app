// Special interface for new form task.
export interface ITodo {
    text: string
}

// Interface for tasks.
export interface ITodos {
    _id: string;
    __v: number;
    done: boolean;
    text: string;
}

// Middleware interface for tasks from api to app. (need to be converted to ITodos)
export interface IRawTodos {
    [key: string]: {
        _id: string;
        __v: number;
        done: boolean;
        text: string;
    };
}