import { Request, Response } from "express";
import { ITodo } from "../modules/Todo";

var todos: ITodo[] = [
    {
        Id: 1,
        Title: "New Todo",
        Description: "Description should be here",
        IsCompleted: false,
        TodoListId: 1,
    },
    {
        Id: 2,
        Title: "Feature Todo",
        Description: "Description should be here",
        IsCompleted: true,
        TodoListId: 2,
    },
];

const getTodos = (req: Request, res: Response) => {
    return res.status(200).json({ todos });
};

const getTodo = (req: Request, res: Response) => {
    const id = Number.parseInt(req.params.id);
    const index = todos.findIndex(prop => prop.Id == id);
    if (index > -1) {
        return res.status(200).json(todos[index]);
    }

    return res.status(404).send();
};

const addTodo = (req: Request, res: Response) => {
    const nextId = todos.map(prop => prop.Id).reduce((a, b) => a > b ? a : b) + 1;

    var todo: ITodo = {
        Id: nextId,
        Title: req.body.Title,
        Description: req.body.Description,
        IsCompleted: false,
        TodoListId: req.body.TodoListId,
    };
    todos = [...todos, todo];

    return res.status(201).json(todo);
};

const updateTodo = (req: Request, res: Response) => {
    const id = Number.parseInt(req.params.id);
    const index = todos.findIndex(prop => prop.Id == id);
    if (index > -1) 
    {
        todos[index].Title = req.body.Title;
        todos[index].Description = req.body.Description;
        todos[index].IsCompleted = req.body.IsCompleted;
        todos[index].TodoListId = req.body.TodoListId;

        return res.status(200).json(todos[index]);
    }

    return res.status(404).send();
};

const deleteTodo = (req: Request, res: Response) => {
    const id = Number.parseInt(req.params.id);
    todos = [...todos.filter(prop => prop.Id != id)];

    return res.status(204).send();
}

export default { getTodos, getTodo, addTodo, updateTodo, deleteTodo };
