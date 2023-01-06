import { action } from "satcheljs";

let addTodo = action("ADD_TODO", (text: string) => ({ text: text }));

export default addTodo;