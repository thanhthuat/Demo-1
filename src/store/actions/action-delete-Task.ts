import { action } from "satcheljs";

let deleteTodo = action("DELETE_TODO", (index: number) => ({ index: index }));

export default deleteTodo;