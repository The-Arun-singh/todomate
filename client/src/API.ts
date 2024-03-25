import axios, { AxiosResponse } from "axios";


const baseUrl: string = 'http://localhost:4000'

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todos: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + '/todos'
        )
        return todos
    } catch (error) {
        throw (error);
    }
};

export const addTodo = async (
    formatData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todo: Omit<ITodo, '_id'> = {
            name: formatData.name,
            description: formatData.description,
            status: false,
        }
        const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + '/add-todo',
            todo
        ) 
        return saveTodo
    } catch (error) {
        throw (error);
    }
};

export const updateTodo = async (
    todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todoUpdate: Pick<ITodo, 'status'> = { status: true}
        console.log(todoUpdate, todo._id)
        const updateTodo: AxiosResponse<ApiDataType> = await axios.put(
            baseUrl + '/edit-todo/' + todo._id,
            todoUpdate
        )
        return updateTodo
    } catch (error) {
        throw (error);
    }
};

export const deletedTodo = async (
    _id: string
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/delete-todo/${_id}`
        )
        return deletedTodo
    } catch (err) {
        throw err;
    }
}
