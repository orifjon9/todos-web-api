import express from "express"
import controller from "../controller/todo"

const router = express.Router();

router.get('/', controller.getTodos);
router.post('/', controller.addTodo);
router.get('/:id', controller.getTodo);
router.put('/:id', controller.updateTodo)
router.delete('/:id', controller.deleteTodo)

export = router