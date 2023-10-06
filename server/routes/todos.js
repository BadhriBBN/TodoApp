const express = require('express');
const {
    getTodo,
    getTodos,
    updateTodo,
    deleteTodo,
    createTodo
} = require("../controllers/TodoController")
const router = express.Router();

router.get('/', getTodos);

router.get('/:id', getTodo);


router.post('/', createTodo);

router.delete('/:id', deleteTodo);

router.patch('/:id', updateTodo);

module.exports = router;
