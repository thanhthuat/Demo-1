import { action } from "satcheljs";

export const  deleteTodo = action("DELETE_TODO", (index: number) => ({ index: index }));

